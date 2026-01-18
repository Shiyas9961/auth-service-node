const { X_API_KEY } = require('../config/constants');

exports.verifyXApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: 'X-API-KEY is missing',
      });
    }
    if (apiKey !== X_API_KEY) {
      return res.status(403).json({
        success: false,
        message: 'Invalid X-API-KEY',
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
