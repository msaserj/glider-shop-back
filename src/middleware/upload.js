const multer = require('multer');
const moment = require('moment');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './src/assets/');
  },
  filename: (req, file, cb) => {
    const date = moment().format('DD-MM-YYY_HH-mm-ss');
    cb(null, file.fieldname + '-' + date + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/*') {
    cb(null, true);
  } else {
    cb(null, file);
  }
};

const limits = {
  fileSize: 1280 * 1024 * 5
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits
});
