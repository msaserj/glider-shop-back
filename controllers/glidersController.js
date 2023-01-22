const Glider = require("../models/gliderModel");

const getGliders = async  (req, res) => {
    try {
        const gliders = await Glider.find();
        res.status(200).json(gliders)
    } catch (err) {
        res.status(500).json({message: "Liste der Segelflugzeuge konnte nicht abgerufen werden"})
    }
}

const createGlider = async  (req, res) => {
    try {
        const {name, price, description, range} = req.body;
        const glider = await Glider.create({
            name, price, description, range, gliderImg: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        });
        req.status(201).json(glider);
    } catch (error) {
        res.status(500).json({message: "Segelflugzeug konnte nicht erstellt werden!"})
    }
}

module.exports = {
    getGliders,
    createGlider
}