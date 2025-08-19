import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { updateUserController } from '../controllers/userController.js';

//router object
const router = express.Router();

// ================= Swagger Docs =================
/**
 * @swagger
 * components:
 *  schemas:
 *    UpdateUser:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Updated first name of the user
 *          example: John
 *        lastName:
 *          type: string
 *          description: Updated last name of the user
 *          example: Doe
 *        email:
 *          type: string
 *          description: Updated email address
 *          example: john.doe@gmail.com
 *        location:
 *          type: string
 *          description: Updated location of the user
 *          example: Mumbai
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /api/v1/user/update-user:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   $ref: '#/components/schemas/UpdateUser'
 *       400:
 *         description: Bad request (missing or invalid data)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

// ================= Routes =================
//UPDATE USER || PUT
router.put('/update-user', userAuth, updateUserController);

export default router;
