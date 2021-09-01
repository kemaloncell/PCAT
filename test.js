const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//Create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Create a photo
// Photo.create({
//   title: 'Photo title 1',
//   description: 'Photo description 1 lorem ',
// });

// Read photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//Update photo

const id = '612fbf334e161840b4e28b9c';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'updated',
//     description: 'güncellendi',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

Photo.findByIdAndDelete(id,(err,data)=>{
  console.log("photo is removed")
})