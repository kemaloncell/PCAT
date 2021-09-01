const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// created model and write required document
const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;