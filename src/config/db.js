const mongoose = require('mongoose');

const { MONGO_URI, MONGO_DB_NAME } = require('./constants');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('DB Connection Error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
