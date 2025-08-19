import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import {
    createJobController,
    deleteJobController,
    getAllJobsController,
    jobStatsController,
    updateJobController
} from '../controllers/jobsController.js';

const router = express.Router();

// ================= Swagger Docs =================
/**
 * @swagger
 * components:
 *  schemas:
 *    Job:
 *      type: object
 *      required:
 *        - company
 *        - position
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the job
 *          example: 64b2f12c9d5f3a001c5a5678
 *        company:
 *          type: string
 *          description: Name of the company
 *          example: Google
 *        position:
 *          type: string
 *          description: Job position
 *          example: Software Engineer
 *        status:
 *          type: string
 *          description: Current status of the job
 *          enum: [pending, interview, declined]
 *          example: pending
 *        workType:
 *          type: string
 *          description: Type of work
 *          enum: [full-time, part-time, contract, internship]
 *          example: full-time
 *        workLocation:
 *          type: string
 *          description: Location of the job
 *          example: Mumbai
 *        createdBy:
 *          type: string
 *          description: User ID who created the job
 */

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job management APIs
 */

/**
 * @swagger
 * /api/v1/jobs/create-job:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/jobs/get-jobs:
 *   get:
 *     summary: Get all jobs for logged-in user
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/jobs/update-job/{id}:
 *   patch:
 *     summary: Update a job by ID
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The job id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Job updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/jobs/delete-job/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The job id
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/jobs/job-stats:
 *   get:
 *     summary: Get job statistics (counts by status)
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Job statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pending:
 *                   type: integer
 *                   example: 2
 *                 interview:
 *                   type: integer
 *                   example: 1
 *                 declined:
 *                   type: integer
 *                   example: 3
 *       500:
 *         description: Internal server error
 */

// ================= Routes =================

//Create Job || POST
router.post('/create-job', userAuth, createJobController);

//Get Jobs || GET
router.get('/get-jobs', userAuth, getAllJobsController);

//Update Jobs || PATCH
router.patch('/update-job/:id', userAuth, updateJobController);

//Delete Jobs || DELETE
router.delete('/delete-job/:id', userAuth, deleteJobController);

//Jobs Stats Filter || GET
router.get('/job-stats', userAuth, jobStatsController);

export default router;
