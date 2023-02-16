const express = require("express");
const router = express.Router();
const {createGlider, getGliders} = require("../controllers/glidersController");
const path = require("path");
const multer = require("multer");

// image path
const storage = multer.diskStorage({
    destination: "./src/assets/",
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage});



// get all gliders
router.get("/", getGliders)
// get one glider on id
router.get("/:id", (req, res)=> res.send('Get single gliders'))
// create one glider
router.post("/", upload.single("gliderImg"), createGlider)

module.exports = router
