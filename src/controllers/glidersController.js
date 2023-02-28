const Glider = require('../models/glidersModel');
const errorhandler = require('../utils/errorHandler');
const keys = require('../config/consts');

module.exports.getGliders = async (req, res) => {
  try {
    const gliders = await Glider.find();
    res.status(200).json(gliders);
  } catch (error) {
    errorhandler(res, error);
  }
};

module.exports.getGlidersFromCart = async (req, res) => {
  try {
    const ids = req.params.id.split(',');
    const gliders = await Glider.find({ _id: { $in: ids } });
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
    const {
      make,
      model,
      price,
      description,
      list: {
        fullDescription,
        glideRatio,
        motor,
        seats,
        fuselageLength,
        maxSpeed,
        emptyMass,
        maxTakeOfMass,
        year,
        oxygen,
        trailer,
        engine
      }
    } = req.body;
    console.log(req.body);

    const glider = await Glider.create({
      make,
      price,
      description,
      model,
      gliderImg: `${keys.assetsURI}/static/${req.file.filename}`,
      list: {
        fullDescription,
        glideRatio,
        motor,
        seats,
        fuselageLength,
        maxSpeed,
        emptyMass,
        maxTakeOfMass,
        year,
        oxygen,
        trailer,
        engine
      }
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
