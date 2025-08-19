//packages imports
//const express=require('express');
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import "express-async-errors";

// Swagger API DocumenATion
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";

//security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

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

// Swagger API config
// Swagger API options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Job Portal Application",
            description: "Node Express.js Job Portal Application",
        },
        servers: [
            {
                //url: "http://localhost:8080",
                url: "https://job-portal-application-abxn.onrender.com"
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const spec = swaggerDoc(options);


//rest object
const app = express();

//middlewares
app.use(express.json()); //to parse JSON bodies
app.use(cors()); //to enable CORS
app.use(morgan("dev"));
app.use(helmet()); //to secure HTTP headers
app.use(xss());
app.use(mongoSanitize());


//routes
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoute);


//homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));


//validaton middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Node Server running in ${process.env.Dev_Mode} Mode on port no. ${PORT}`.bgCyan.white);
});

