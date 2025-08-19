import express from 'express';
import { testPostController } from '../controllers/testController.js';
import userAuth from '../middlewares/authMiddleware.js';

//Router object
const router = express.Router();

// ================= Swagger Docs =================
/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test APIs
 */

/**
 * @swagger
 * /api/v1/test/test-post:
 *   post:
 *     summary: Test POST endpoint (for debugging / auth check)
 *     tags: [Test]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello from test route"
 *     responses:
 *       200:
 *         description: Test route response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: string
 *                   example: "Protected test POST route accessed"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

// ================= Routes =================
router.post('/test-post', userAuth, testPostController);

//export
export default router;
