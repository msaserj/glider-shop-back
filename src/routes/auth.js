const express = require('express');
const controller = require('../controllers/authContoller');
const router = express.Router();

router.post('/login', controller.login);

router.post('/registr', controller.registr);

module.exports = router;
