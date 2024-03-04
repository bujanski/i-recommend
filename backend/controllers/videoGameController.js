const { Videogame } = require("../models/associations");
const { Sequelize  } = require('sequelize');
 
const topVideogames = async (req, res) => {
    try {
        const topList = await Videogame.findAll({
            limit: 25,
            // You can add more options like order, where, etc., if needed
        });
        // Assuming you want to send the topList as a JSON response
        res.json(topList);
    } catch (error) {
        console.error("Error fetching top movies:", error);
        res.status(500).send("Internal Server Error");
    }
}

const getVideogame = async (req, res) => {
    const {id} = req.params;
    try {
        const game = await Videogame.findByPk(id);
        // Assuming you want to send the topList as a JSON response
        res.json(game);
    } catch (error) {
        console.error("Error fetching top movies:", error);
        res.status(500).send("Internal Server Error");
    }
};

const videoGameSearch = async (req, res) => {
    const { searchText } = req.params;

    try {
        const searchResult = await Videogame.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        title: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        genres: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        released: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                ],
            },
        });

        res.status(200).json({ success: true, data: searchResult });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};


module.exports = {
    topVideogames,
    videoGameSearch,
    getVideogame
};