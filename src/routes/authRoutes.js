const router = require('express').Router();

const authController = require('../controllers/authController');
const { verifyXApiKey } = require('../middlewares/xApiKey');

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

/**
 * @swagger
 * /api/auth/validate-internal:
 *   post:
 *     summary: Validate JWT token for internal services
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         schema:
 *           type: string
 *         description: Internal service API key
 *     requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         token:
 *                             type: string
 *     responses:
 *       200:
 *         description: Token is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

router.post('/login', authController.login);
router.post('/validate', authController.validate);
router.post(
  '/validate-internal',
  verifyXApiKey,
  authController.validateForInternalService
);

module.exports = router;
