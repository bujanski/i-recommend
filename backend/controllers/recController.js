const { Sequelize } = require("sequelize");
const { Recommendation } = require("../models/associations");

const getAllRecLists = async (req, res) => {
    try {
        // Fetch all users from the database
        const recs = await Recommendation.findAll();

        console.log(recs);

        res.json(recs);
    } catch (error) {
        console.error("Error fetching Recommendations:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const getARecList = async (req, res) => {
    try {
        // Fetch a specific Recommendation List by ID from the database
        const rec = await Recommendation.findByPk(req.params.id);
        if (!rec) {
            res.end();
        } else {
            res.json(rec);
            //res.status(200).json({ success: true, data: searchResult });
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const getRecs = async (req, res) => {
    const {id, category} = req.params;
    console.log(`Getting recs. ${id}, ${category}`)
    try {
        const recs = await Recommendation.findAll()
    } catch (error) {
        console.error("Error searching database", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const updateRecs = async (req, res) => {
    console.log('Updating recs.')
    try {
        const recs = await Recommendation.findAll()
    } catch (error) {
        console.error("Error searching database", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteRecList = async (req, res) => {
    try {
        // Delete a user by ID from the database
        await Recommendation.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.json({ message: "Deleted List with Recommendation id of" + req.params.id });
    } catch (error) {
        console.error("Error deleting Recommendation List:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    getAllRecLists,
    getARecList,
    deleteRecList,
    getRecs,
    updateRecs,
};
