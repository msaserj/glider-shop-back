const express = require('express');
const router = express.Router();
const controller = require('../controllers/glidersController');
const path = require('path');
const multer = require('multer');
const passport = require('passport');
const { session } = require('passport');

// image path
const storage = multer.diskStorage({
  destination: './src/assets/',
  filename: (req, file, callback) => {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// get all gliders
// router.get('/', passport.authenticate('jwt', { session: false }), controller.getGliders);
router.get('/', controller.getGliders);
// get one glider on id
router.get('/:id', controller.getGliderById);
// create one glider
router.post('/', upload.single('gliderImg'), controller.createGlider);

// patch one glider on id
router.patch('/:id', controller.updateGliderById);

// delete one glider on id
router.delete('/:id', controller.removeGliderById);

module.exports = router;
