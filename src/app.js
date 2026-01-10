const express = require("express");
const swaggerUI = require("swagger-ui-express");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const swaggerDocs = require("./config/swagger");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Swagger route
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;