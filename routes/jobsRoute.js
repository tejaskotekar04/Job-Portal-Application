import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { createJobController, deleteJobController, getAllJobsController, jobStatsController, updateJobController } from '../controllers/jobsController.js';

const router = express.Router();

//routes
//Create Job || POST
router.post('/create-job', userAuth, createJobController);

//Get Jobs || GET
router.get('/get-jobs', userAuth, getAllJobsController);

//Update Jobs || PUT || PATCH
router.patch('/update-job/:id', userAuth, updateJobController);

//Delete Jobs || DELETE
router.delete('/delete-job/:id', userAuth, deleteJobController);

//Jobs Stats Filter || GET
router.get('/job-stats', userAuth, jobStatsController);

export default router;