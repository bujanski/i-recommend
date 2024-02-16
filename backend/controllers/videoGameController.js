const { Videogame } = require("../models/associations");
const { Sequelize  } = require('sequelize');

const addGames = async (req, res) => {
    const { games } = req.body;
    console.log(req.body);
    res.json({hello: "true"})
   
};

module.exports = {
    addGames,
};