import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

export const connectDB = async() => {
    
    const sequelize = new Sequelize( database, username, password, {
        host: 'localhost',
        dialect: 'postgres'
    });
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}