const express = require('express');
const router = express.Router();
const controller = require('../controllers/glidersController');
const passport = require('passport');
const { session } = require('passport');
const upload = require('../middleware/upload');

// get all gliders
// router.get('/', passport.authenticate('jwt', { session: false }), controller.getGliders);
router.get('/', controller.getGliders);
// get one glider on id
router.get('/:id', controller.getGliderById);
// create one glider
router.post('/', upload.single('gliderImg'), controller.createGlider);
// patch one glider on id
router.patch('/:id', upload.single('gliderImg'), controller.updateGliderById);

// delete one glider on id
router.delete('/:id', controller.removeGliderById);

module.exports = router;
