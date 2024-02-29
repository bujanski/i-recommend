const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Recommendation = sequelize.define('Recommendations', {
    ranking: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: false
});


module.exports = Recommendation;