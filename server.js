require("dotenv").config();

const app = require("./src/app")
const connectDB = require("./src/config/db");
const { PORT, NODE_ENV } = require("./src/config/constants")

connectDB();

if (NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Auth Service running on port ${PORT}`)
    })
}

module.exports = app;