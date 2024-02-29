const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Recommendation = sequelize.define('Recommendations', {

}, {
    timestamps: false
});


module.exports = Recommendation;