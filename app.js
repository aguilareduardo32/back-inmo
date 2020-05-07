require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session       = require('express-session');





mongoose
  .connect('mongodb://localhost/inmobiliaria', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// ADD SESSION SETTINGS HERE:


// USE passport.initialize() and passport.session() HERE:


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(session({
  secret:"some secret goes here",
  resave: true,
  saveUninitialized: true
}));


//app.use(passport.initialize());
//app.use(passport.session());

app.locals.title = 'Express ';

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION:

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] // <== URL of our React app 
}));


// ROUTES MIDDLEWARE STARTS HERE:

const InmueblesRoutes = require('./routes/inmuebles');
app.use('/api', InmueblesRoutes);

const Solicitudes = require('./routes/interesados');
app.use('/api', Solicitudes);


app.use('/api', require('./routes/PicUpload'));

module.exports = app;
