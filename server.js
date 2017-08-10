const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Set up database
const  mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/SCPhotography');
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/SCPhotography', {
  useMongoClient: true,
});

var UsersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

var AlbumsSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true}
})

mongoose.model("Users", UsersSchema);
var Users = mongoose.model("Users");

mongoose.model("Albums", AlbumsSchema);
var Albums = mongoose.model("Albums");

// ***********************************

const app = express();

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(session({secret: 'itsasecret'})); 

// Sets middlewear to connect Vue to Express
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// ********** CONTROLLER **********

// Admin login
app.post('/login', function(req, res) {
  // console.log("Server HIT!!!!!!!!!!!!!!!!!!!!");

  Users.findOne({email: req.body.email}, function(err, user) {   
    if(err || user === null) {
      res.status(500).json({'error': "Invalid Login"})
    } else {
        if(req.body.password === user.password) {
            req.session.user = user;
            console.log("Passwords Match!!!!!!")
            res.json(true)
        } else {
            console.log("Incorect password")
            res.status(500).json({'error': "Invalid Login"})
        }
    }    
  });
});

app.get("/display_albums", function(req, res) {

  Albums.find({})
    .then(albums => { 
      console.log(albums)
      res.json(albums) 
    })
    .catch(err => {
        console.log("Find All Error", err)
        res.status(500).json(err);
    }) 
});

app.get("/find_album/", function(req, res) {
  Albums.find({_id: req.body.id})
    .then(album => {
      console.log(req.body.id)
      res.json(album)
    })
    .catch(error => {
      console.log(error)
    })
});

app.post("/delete_album/:id", function(req, res) {
  Albums.remove({_id: req.params.id})
    .then(album => {
      res.json(album)
    }) 
    .catch(error => {
      console.log(error);
    })
});



app.post('/create_album', function(req, res) {

  var album = new Albums(req.body)
  album.save()
    .then(() => {
      console.log("Album added to DB");
      res.json(true);
    })

  console.log(req.body)
});

app.get('/check_status', function(req, res) {
  res.json({user: req.session.user});
});

  // var user = new Users({email: "wintermist3@gmail.com", password: "password", name: "Sereina"})
  // user.save(function(err)
  // });


app.get('*', function (req, res) {
  return res.sendFile('../index.html');
});

// app.route('/*').get(function (req, res) {
//   return res.sendFile(path.join(__dirname, '../index.html'));
// });

app.listen(3000);
console.log('Express server listening on port 3000');
