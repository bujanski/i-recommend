const {Sequelize} = require('sequelize');
const { database, username, password, host } = require('./configVariables');


// const sequelize = new Sequelize('irecommend', 'postgres', 'postgres', {
//     host: 'localHost',
//     dialect: 'postgres',
//     logging: false
// });

const sequelize = new Sequelize(database,username,password, {
    host: host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    logging: false
});

const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connected to database");
    }catch (error) {
        console.log("Connection failed due to this error: ", error);
    }
};

module.exports = {
    sequelize,
    testConnection
};