const Glider = require('../models/glidersModel');
const errorhandler = require('../utils/errorHandler');

module.exports.getGliders = async (req, res) => {
  try {
    const gliders = await Glider.find();
    res.status(200).json(gliders);
  } catch (error) {
    errorhandler(res, error);
  }
};

module.exports.getGliderById = async (req, res) => {
  try {
    const glider = await Glider.find({ _id: req.params.id });
    res.status(200).json(glider);
  } catch (error) {
    errorhandler(res, error);
  }
};

module.exports.createGlider = async (req, res) => {
  try {
    const { name, price, description, range, addDescription } = req.body;
    const glider = await Glider.create({
      name,
      price,
      description,
      range,
      addDescription,
      gliderImg: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
    });
    res.status(201).json(glider);
  } catch (error) {
    errorhandler(res, error);
  }
};

module.exports.removeGliderById = async (req, res) => {
  try {
    await Glider.remove({ _id: req.params.id });
    res.status(200).json({
      status: true,
      message: 'Successfully deleted'
    });
  } catch (error) {
    errorhandler(res, error);
  }
};

module.exports.updateGliderById = async (req, res) => {
  try {
    const glider = await Glider.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ); // завпись после изменений
    res.status(200).json({
      status: true,
      position: glider
    });
  } catch (error) {
    errorhandler(res, error);
  }
};
