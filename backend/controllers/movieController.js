const { Movie} = require("../models/associations");
const { Sequelize  } = require('sequelize');

const topMovies = async (req, res) => {
    try {
        const topList = await Movie.findAll({
            limit: 25,
            // You can add more options like order, where, etc., if needed
        });
        // Assuming you want to send the topList as a JSON response
        res.json(topList);
    } catch (error) {
        console.error("Error fetching top movies:", error);
        res.status(500).send("Internal Server Error");
    }
};



const movieSearch = async (req, res) => {
    const { searchText } = req.params;

    try {
        const searchResult = await Movie.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        title: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        director: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        actors: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        year: {
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
    movieSearch,
    topMovies
};
