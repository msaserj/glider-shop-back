const express = require("express");
const router = express.Router();
const path = require("path")

// get all gliders
router.get("/", (req, res)=> res.send('Get all gliders'))
// get one glider on id
router.get("/:id", (req, res)=> res.send('Get single gliders'))
// create one glider
router.post("/", (req, res)=> res.send('create plane'))

module.exports = router
