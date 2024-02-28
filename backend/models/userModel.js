const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const User = sequelize.define('Users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.STRING,
    },
    hashPass: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false
});


module.exports = User
;