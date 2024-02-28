const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secretKey } = require("../config/configVariables");
const { Sequelize } = require("sequelize");
const { User, Recommendation } = require("../models/associations");

const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.findAll();

        console.log(users);

        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const getAUser = async (req, res) => {
    try {
        // Fetch a specific user by ID from the database
        const user = await User.findByPk(req.params.id);

        if (!user) {
            res.end();
        } else {
            res.json(user);
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
        // const recs = await Recommendation.findAll()
    } catch (error) {
        console.error("Error searching database", error);
    }
}

const updateRecs = async (req, res) => {
    console.log('Updating recs.')
    try {
        // const recs = await Recommendation.findAll()
    } catch (error) {
        console.error("Error searching database", error);
    }
}

const newUser = async (req, res) => {
    let { firstName, lastName, email, username, password } = req.body;

    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 12);
        const createdAt = new Date().toISOString();

        // Create a new user record in the database
        const user = await User.create({
            firstName,
            lastName,
            email,
            username,
            createdAt,
            hashPass: hashedPassword,
        });

        // Optionally, you can generate a token or perform any other actions here

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        console.error("Error creating user:", error);

        if (error.name === 'SequelizeUniqueConstraintError') {
            let field;
            if (error.fields.username) {
                field = "username";
            } else if (error.fields.email) {
                field = "email";
            }

            // Include the 'field' property in the error response
            res.status(409).json({
                success: false,
                message: "Username or email already exists",
                field,
            });
        } else {
            // Handle other errors
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
};



const deleteUser = async (req, res) => {
    try {
        // Delete a user by ID from the database
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.json({ message: "Deleted user with id of" + req.params.id });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    getAllUsers,
    getAUser,
    deleteUser,
    newUser,
    getRecs,
    updateRecs,
};
