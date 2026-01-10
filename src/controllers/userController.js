const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { createUser } = require('../services/authServices');
const { validateUserInput } = require('../utils/validation');

exports.createUser = async (req, res) => {
  try {
    validateUserInput(req.body);
    const { email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({
        success: false,
        message: 'User already exists',
      });
    }
    const user = await createUser(req.body);
    res.json({
      success: true,
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({
      success: true,
      message: 'Users fetched successfully',
      users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.json({
        success: false,
        message: 'User not found',
      });
    }
    res.json({
      success: true,
      message: 'User fetched successfully',
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: 'All fields are required',
      });
    }
    validateUserInput(req.body, true);
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await User.findOne({ email });

    if (userExists && userExists._id.toString() !== req.params.id) {
      return res.json({
        success: false,
        message: 'User already exists',
      });
    }
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password: hashedPassword,
      },
      {
        new: true,
      }
    ).select('-password');
    if (!user) {
      return res.json({
        success: false,
        message: 'User not found',
      });
    }
    res.json({
      success: true,
      message: 'User updated successfully',
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.json({
        success: false,
        message: 'User not found',
      });
    }
    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
