const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

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

mongoose.model("Users", UsersSchema);
var Users = mongoose.model("Users");

// ***********************************

const app = express();

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());

// Sets middlewear to connect Vue to Express
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// ********** CONTROLLER **********

// Admin login
app.post('/login', function(req, res) {
  console.log("Server HIT!!!!!!!!!!!!!!!!!!!!");

  Users.findOne({email: req.body.email}, function(err, user) {
    console.log("USER: ", user)
    
    if(err || user === null) {
      res.status(500).json({'error': "Invalid Login"})
    } else {
        if(req.body.password === user.password) {
            // req.session.id = user._id
            console.log("Passwords Match!!!!!!")
            res.json(true)
        } else {
            res.status(500).json({'error': "Invalid Login"})
        }
    }    
  })

  // var user = new Users({email: "wintermist3@gmail.com", password: "password", name: "Sereina"})
  // user.save(function(err)
  // });

})

app.get('*', function (req, res) {
  return res.sendFile('../index.html');
});

// app.route('/*').get(function (req, res) {
//   return res.sendFile(path.join(__dirname, '../index.html'));
// });

app.listen(3000);
console.log('Express server listening on port 3000');
