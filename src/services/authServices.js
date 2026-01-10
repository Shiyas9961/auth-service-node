const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { JWT_SECRET } = require("../config/constants");

const createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User(
        {
            ...data,
            password: hashedPassword
        }
    );
    const savedUser = await user.save();
    return User.findById(savedUser._id).select("-password");
}

const loginUser = async (email, password) => {
    const user = await User.findOne(
        {
            email: email
        }
    );
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: email
        },
        JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )
    return token;
}

const validateToken = async (token) => {
    try {
        const data = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(data.id).select("-password");
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch {
        throw new Error("Invalid or expired token")
    }
};

module.exports = {
    createUser,
    loginUser,
    validateToken
};