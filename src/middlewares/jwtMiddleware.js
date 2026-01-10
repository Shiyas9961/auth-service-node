const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/constants");

exports.verifyJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.json(
                {
                    success: false,
                    message: "No token provided"
                }
            )
        }
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data;
        next();
    } catch (error) {
        return res.json(
            {
                success: false,
                message: "Unauthorized"
            }
        )
    }
}