const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
const MONGO_COLLECTION_NAME = process.env.MONGO_COLLECTION_NAME;
const PORT = process.env.PORT || 5000;

module.exports = {
    PORT,
    MONGO_URI,
    JWT_SECRET,
    MONGO_DB_NAME,
    MONGO_COLLECTION_NAME
}