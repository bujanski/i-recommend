const dotenv = require('dotenv');

dotenv.config();

const {database,db_username: username,password,host,secretKey} = process.env;

module.exports ={
    database,
    username,
    password,
    host,
    secretKey
}