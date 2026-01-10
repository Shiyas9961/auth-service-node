const router = require("express").Router();

const userController = require("../controllers/userController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management APIs
 */

/**
 * @swagger
 * /api/users/create:
 *  post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: User created successfully
 */

/**
 * @swagger
 * /api/users/:
 *  get:
 *      summary: Get all users
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *          200:
 *              description: Users fetched successfully
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Get user by ID
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: User fetched successfully
 */

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Update user by ID
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: User updated successfully
 */

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Delete user by ID
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: User deleted successfully
 */

router.post("/create", userController.createUser);
router.get("/", verifyJWT, userController.getUsers);
router.get("/:id", verifyJWT, userController.getUserById);
router.put("/:id", verifyJWT, userController.updateUser);
router.delete("/:id", verifyJWT, userController.deleteUser);

module.exports = router;
