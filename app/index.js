const express = require('express');

const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);
app.locals.basedir = __dirname;

app.on('mount', server => {
  app.client = server.client;
});

app.use(express.urlencoded({extended: true}));


app.use('/', routes);

module.exports = app;