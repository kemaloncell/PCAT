const express = require('express');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const mongoose = require('mongoose');
const photoController = require('./controllers/PhotoControllers');
const pageController = require('./controllers/PageController');
const Photo = require('./models/Photo');

const app = express();

//* Connect DB
mongoose
  .connect('mongodb://kemal:nkfh3Rsx6iPBa7sB@cluster0-shard-00-00.nbotz.mongodb.net:27017,cluster0-shard-00-01.nbotz.mongodb.net:27017,cluster0-shard-00-02.nbotz.mongodb.net:27017/pcat-db?ssl=true&replicaSet=atlas-clc38i-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connected !');
  })
  .catch((err) => {
    console.log(err);
  });

//* Template engine
app.set('view engine', 'ejs');

//* Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//* Routes
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPohoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photo', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server port ${port} started`);
});
