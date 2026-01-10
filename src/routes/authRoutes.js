const router = require('express').Router();

const authController = require('../controllers/authController');

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: Login
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: Login successful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                              token:
 *                                  type: string
 *                              message:
 *                                  type: string
 */

/**
 * @swagger
 * /api/auth/validate:
 *  post:
 *      summary: Validate JWT token
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              type: string
 *      responses:
 *          200:
 *              description: Token is valid
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                              message:
 *                                  type: string
 *                              user:
 *                                  type: object
 */

router.post('/login', authController.login);
router.post('/validate', authController.validate);

module.exports = router;
