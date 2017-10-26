const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const cookieparser = require('cookie-parser');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/static/uploads/albums')
  },
  filename: function (req, file, cb) {
    cb(null, "photo" + '_' + Date.now()+'.jpg')
  }
})
const upload = multer({ storage: storage });

// ******************************************
// **************** MONGOOSE ****************

const mongoose = require('mongoose');
// Set up database
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/SCPhotography', {
  useMongoClient: true,
});

/* ****** Mongoose Schemas ***** */

/* ----- Users Schema ----- */
var UsersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {timestamps: true})

mongoose.model("Users", UsersSchema);
var Users = mongoose.model("Users");

/* ----- Albums Schema ----- */
var AlbumsSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true}
}, {timestamps: true})

mongoose.model("Albums", AlbumsSchema);
var Albums = mongoose.model("Albums");

/* ----- Photos Schema ----- */
var PhotosSchema = new mongoose.Schema({
  location: {type: String, required: true},
  album_id: {type: String, required: true},
  category: {type: String, required: true}
}, {timestamps: true})

mongoose.model("Photos", PhotosSchema);
var Photos = mongoose.model("Photos");

// *****************************************
// **************** SERVER ****************

const app = express();

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());

app.use(session({secret: 'itsasecret', cookie: { maxAge: 60000 }})); 
app.use(cookieparser())

// Sets middlewear to connect Vue to Express
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  res.header('content-type: application/json; charset=utf-8');
  next();
});

var fs = require("fs");


// **************** CONTROLLER ****************

// Admin login
app.post('/login', function(req, res) {
  // console.log("Server HIT!!!!!!!!!!!!!!!!!!!!");

  Users.findOne({ email: req.body.email }, function(err, user) {  
    // Checks if user was found
    if(err || user === null) {
      res.status(500).json({'error': "Invalid Login"})
    } else {
      // Checks if passwords match
        if(req.body.password === user.password) {
            req.session.user_id = user._id;
            console.log("Login session: ", req.session.user_id)
            console.log("Passwords Match!!!!!!")
            res.json(true)
        } else {
            console.log("Incorrect password")
            res.status(500).json({'error': "Invalid Login"})
        }
    }    
  });
});

// Checks if user is logged in to session
app.get('/check_status', function(req, res) {
  var user = req.session.user_id;
  console.log("***** Check Status *****")
  console.log("Session: ", user)
  // res.json({user: req.session.user});
});

// Finds all images for selected category
// From Home
app.post("/find_category", function(req, res) {
  Photos.find({ category: req.body.category })
    .then(photos => {
      console.log("Photos Found")
      res.json(photos)
    })
    .catch(err => {
      console.log("Find Category Error!")
        res.status(500).json(err);
    })
});

// Returns array of ALL ALBUMS
// from Dashboard
app.get("/display_albums", function(req, res) {
  Albums.find({})
    .then(albums => { 
      res.json(albums) 
    })
    .catch(err => {
        console.log("Find All Error", err)
        res.status(500).json(err);
    }) 
});

// Uses Album ID to find and return said album
app.post("/find_album/", function(req, res) {
  Albums.find({_id: req.body.id})
    .then(album => {
      res.json(album)
    })
    .catch(error => {
      console.log(error)
    })
});

// Remove album from DB
// from Dashboard
app.post("/delete_album/:id", function(req, res) {

  // Photos.remove({album_id: req.params.id})
    
  Albums.remove({_id: req.params.id})
    .then(album => {
      res.json(album)
    }) 
    .catch(error => {
      console.log(error);
    })
});

// Create album and add to DB
// from Dashboard
app.post('/create_album', function(req, res) {
  var album = new Albums(req.body)
  album.save()
    .then(() => {
      console.log("Album added to DB");
      res.json(true);
    })

  console.log(req.body)
});

// Upload photos and save in server 
// from EditAdmin
app.post('/upload_photos/:id/:category', upload.array('file'), function(req, res) {
  console.log("Server Hit!!!!!!!!!!")
  console.log(req.files[0].filename)

  var photo = new Photos({ location: req.files[0].filename, album_id: req.params.id, category: req.params.category});
  photo.save()
    .then(() => {
      console.log("Photo added to DB");
      res.json(true);
    });

});

// Finds all photos for specific album
app.post("/find_photos", function(req, res) {
  console.log("Find Photos function hit!!!!!!!!!!!")
  Photos.find({album_id: req.body.id})
    .then(photos => {
      console.log(photos)
      res.json(photos)
    })
    .catch(error => {
      console.log(error)
    })
});

app.get('*', function (req, res) {
  return res.sendFile('../index.html');
});

// app.route('/*').get(function (req, res) {
//   return res.sendFile(path.join(__dirname, '../index.html'));
// });

app.listen(3000);
console.log('Express server listening on port 3000');
