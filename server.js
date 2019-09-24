var express = require("express"),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
mongoose = require('./server/config/mongoose'),
flash = require('express-flash'),
session = require('express-session');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());

app.use(express.static(__dirname + "/public/dist/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');



require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));
