const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secretKey } = require("../config/configVariables");
const { Sequelize } = require("sequelize");
const { User } = require("../models/associations");

const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.findAll();
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

const autoLogin = async (req, res) => {
    const { token } = req.body;;

    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: "No token provided" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, secretKey); // Replace 'your-secret-key' with your actual secret key

        // Use the decoded data to find the user or perform any other necessary checks
        const user = await User.findByPk(decoded.userId);

        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: "User not found" });
        }

        // If everything is valid, send back user information
        return res.status(200).json({
            success: true,
            user: {
                userId: user.id,
                username: user.username,
                // ... other user information you want to send
            },
        });
    } catch (error) {
        console.error("Error during auto-login:", error);
        return res
            .status(401)
            .json({ success: false, message: "Invalid token" });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find user in the database based on the provided username
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            // If user not found, send an error response
            return res.status(404).json({ error: "User not found" });
        }

        // Extract the user ID and hashed password from the user object
        const userId = user.id; // Assuming user ID is stored in the 'id' field
        const storedHashedPassword = user.hashPass;

        // Compare the provided password with the stored hashed password using bcrypt
        bcrypt.compare(password, storedHashedPassword, (err, result) => {
            if (err) {
                // Handle error
                console.error(err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (result) {
                // Passwords match - User is authenticated
                const userPayload = {
                    userId: user.dataValues.id,
                    username: username,
                };
                const options = { expiresIn: "168h" }; // Optional: Set expiration time
                const token = jwt.sign(userPayload, secretKey, options);

                // Include the JWT in the response
                return res.status(201).json({
                    success: true,
                    message: "User logged in successfully",
                    token,
                });
            } else {
                // Passwords do not match - Authentication failed
                return res.status(401).json({ error: "Authentication failed" });
            }
        });
    } catch (error) {
        // Handle any database or server error
        console.error("Error finding user in db:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getRecs = async (req, res) => {
    const { id, category } = req.params;
    console.log(`Getting recs. ${id}, ${category}`);
    try {
        // const recs = await Recommendation.findAll()
    } catch (error) {
        console.error("Error searching database", error);
    }
};

const updateRecs = async (req, res) => {
    console.log("Updating recs.");
    try {
        // const recs = await Recommendation.findAll()
    } catch (error) {
        console.error("Error searching database", error);
    }
};

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

        // Generate a JWT for the newly created user
        const userPayload = {
            userId: user.id,
            username: user.username,
        };
        const options = { expiresIn: "168h" }; // Optional: Set expiration time
        const token = jwt.sign(userPayload, secretKey, options);

        // Include the JWT in the response
        res.status(201).json({
            success: true,
            message: "User created successfully",
            token,
        });
    } catch (error) {
        console.error("Error creating user:", error);

        let responseStatusCode = 500;
        let responseMessage = "Internal server error";

        if (error.name === "SequelizeUniqueConstraintError") {
            let field;
            if (error.fields.username) {
                field = "username";
            } else if (error.fields.email) {
                field = "email";
            }

            // Include the 'field' property in the error response
            responseStatusCode = 409;
            responseMessage = "Username or email already exists";
        }

        // Return a consistent error response structure
        res.status(responseStatusCode).json({
            success: false,
            message: responseMessage,
            field,
        });
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
    loginUser,
    autoLogin,
};
