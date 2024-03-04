const { Book } = require("../models/associations");
const { Sequelize  } = require('sequelize');

const topBooks = async (req, res) => {
    try {
        const topList = await Book.findAll({
            limit: 25,
            // You can add more options like order, where, etc., if needed
        });
        // Assuming you want to send the topList as a JSON response

        res.json(topList);
    } catch (error) {
        console.error("Error fetching top books:", error);
        res.status(500).send("Internal Server Error");
    }
};

const getBook = async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findByPk(id);
        // Assuming you want to send the topList as a JSON response
        res.json(book);
    } catch (error) {
        console.error("Error fetching top movies:", error);
        res.status(500).send("Internal Server Error");
    }
};

const bookSearch = async (req, res) => {
    const { searchText } = req.params;

    try {
        const searchResult = await Book.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        title: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        contributor: {
                            [Sequelize.Op.iLike]: `%${searchText}%`,
                        },
                    },
                    {
                        date: {
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
    bookSearch,
    topBooks,
    getBook,
};
