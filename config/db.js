const { Sequelize } = require('sequelize');

// Initialize Sequelize with connection parameters from environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set to true if you want SQL queries logged to the console
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected');
    } catch (error) {
        console.error('MySQL connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
