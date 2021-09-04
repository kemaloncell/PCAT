const Photo = require('../models/Photo');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add');
};

exports.getPhotoPage = (req, res) => {
  res.render('photo');
};

exports.getEditPage = async (req, res) => {
  // burada update değil sadece sayfa çağırılıyor
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
