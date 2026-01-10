require("dotenv").config();

const app = require("./src/app")
const connectDB = require("./src/config/db");
const { PORT } = require("./src/config/constants")

connectDB();

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`))