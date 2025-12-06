const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// routes
const indexRoutes = require('./routes/index');
const menuRoutes = require('./routes/menu');
const aboutRoutes = require('./routes/about');
const commentsRoutes = require('./routes/comments');

app.use('/', indexRoutes);
app.use('/menu', menuRoutes);
app.use('/about', aboutRoutes);
app.use('/comments', commentsRoutes);

// export app for bin/www
module.exports = app;
