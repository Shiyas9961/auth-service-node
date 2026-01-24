const express = require('express');
const swaggerUI = require('swagger-ui-express');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerDocs = require('./config/swagger');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Serve Swagger dynamically
app.use(
  '/api/docs',
  (req, res, next) => {
    // dynamically set server URL based on the current request
    swaggerDocs.servers = [
      {
        url: `${req.protocol}://${req.get('host')}`,
      },
    ];
    next();
  },
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs)
);

module.exports = app;
