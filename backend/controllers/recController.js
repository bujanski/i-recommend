const { Recommendation } = require("../models/associations")
const { Sequelize  } = require('sequelize');

const getUserRecs = async (req, res) => {
    const { userId } = req.params;

    try {
        const userRecs = await Recommendation.findAll({
            where: {
                UserId: userId
            },
            order: [
                ['ranking', 'ASC'] // You can use 'DESC' for descending order
            ]
            // You can include additional options here, such as limit, etc.
        });

        // Send the user recommendations back in the response
        res.status(200).json({
            success: true,
            userRecs: userRecs
        });
    } catch (error) {
        console.error('Error fetching user recommendations:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const getTop25 = async (req, res) => {
    const { category } = req.params;

    try {
        const categoryField = `${category}Id`;

        const topList = await Recommendation.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'recommendationCount'],
                [categoryField, categoryField],
                'title', // Add the title field
            ],
            group: [categoryField, 'title'],
            where: {
                [categoryField]: {
                    [Sequelize.Op.not]: null,
                },
            },
            order: [
                [Sequelize.literal('"recommendationCount" DESC')],
            ],
            limit: 25,
        });

        res.json(topList);
    } catch (error) {
        console.error(`Error fetching top ${category}:`, error);
        res.status(500).send('Internal Server Error');
    }
};




const updateRankings = async (req, res) => {
    try {
        const { updatedItems } = req.body;

        // Assuming each item has an 'id' field for identification
        for (const updatedItem of updatedItems) {
            await Recommendation.update(
                { ranking: updatedItem.ranking },
                { where: { id: updatedItem.id } }
            );
        }

        res.status(200).json({ message: 'Rankings updated successfully' });
    } catch (error) {
        console.error('Error updating rankings', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addRec = async (req, res) => {
    try {
        const { ranking, title, UserId, MovieId, BookId, VideogameId } = req.body;

        // Validate that at least one of MovieId, BookId, or VideogameId is provided
        if (!(MovieId || BookId || VideogameId)) {
            return res.status(400).json({ error: 'At least one of MovieId, BookId, or VideogameId is required.' });
        }

        // Build the where condition based on provided parameters
        const whereCondition = {};
        if (UserId) whereCondition.UserId = UserId;
        if (MovieId) whereCondition.MovieId = MovieId;
        if (BookId) whereCondition.BookId = BookId;
        if (VideogameId) whereCondition.VideogameId = VideogameId;

        // Check if the user has already recommended the same thing
        const existingRecommendation = await Recommendation.findOne({
            where: whereCondition,
        });

        if (existingRecommendation) {
            // User has already recommended the same thing
            return res.status(400).json({ error: 'User has already recommended the same thing.' });
        }

        // Create a new recommendation
        const newRecommendation = await Recommendation.create({
            ranking,
            title,
            UserId,
            MovieId,
            BookId,
            VideogameId,
        });

        res.status(201).json(newRecommendation);
    } catch (error) {
        console.error('Error adding recommendation', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = { addRec };

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
    getUserRecs,
    deleteRecList,
    updateRankings,
    addRec,
    getTop25
};
