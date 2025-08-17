//packages imports
//const express=require('express');
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import "express-async-errors";
//files imports
import connectDB from './config/db.js';

//import routes
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import jobsRoute from './routes/jobsRoute.js';

//DOT ENV config
dotenv.config();

//MongoDB connection
connectDB();


//rest object
const app = express();

//middlewares
app.use(express.json()); //to parse JSON bodies
app.use(cors()); //to enable CORS
app.use(morgan("dev"));


//routes
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoute);


//validaton middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Node Server running in ${process.env.Dev_Mode} Mode on port no. ${PORT}`.bgCyan.white);
});

