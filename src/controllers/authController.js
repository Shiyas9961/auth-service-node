const { loginUser, validateToken } = require('../services/authServices');

exports.login = async (req, res) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.json({
      success: true,
      message: 'User logged in successfully',
      token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.validate = async (req, res) => {
  try {
    const user = await validateToken(req.body.token);
    res.json({
      success: true,
      message: 'Token validated successfully',
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.validateForInternalService = async (req, res) => {
  try {
    const user = await validateToken(req.body.token);
    res.json({
      success: true,
      message: 'Token validated successfully for internal service',
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
