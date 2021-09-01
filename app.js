const express = require('express');
const Photo = require('./models/Photo');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//* Template engine
app.set('view engine', 'ejs');

//* Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//* Routes
app.get('/', async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html')); zor yol :)
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.post('/photos', async (req, res) => {
  await Photo.create(req.body); //will wait until the document is created in the database
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server port ${port} started`);
});
