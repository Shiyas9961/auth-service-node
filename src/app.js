const express = require('express');
const swaggerUI = require('swagger-ui-express');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerDocs = require('./config/swagger');
const { SWAGGER_BASE_PATH } = require('./config/constants');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/docs/swagger.json', (req, res) => {
  const prefix = req.headers['x-forwarded-prefix'] || SWAGGER_BASE_PATH || '';
  res.json({
    ...swaggerDocs,
    servers: [
      {
        url: `${req.protocol}://${req.get('host')}${prefix}`,
      },
    ],
  });
});

// Serve Swagger dynamically
app.use(
  '/api/docs',
  swaggerUI.serve,
  swaggerUI.setup(null, {
    swaggerUrl: '/api/docs/swagger.json',
  })
);

module.exports = app;
