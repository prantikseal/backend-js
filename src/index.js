// require('dotenv').config({path : './env'}) //with out consistency

// with consistency of dotenv 
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})


connectDB()







/* //first approach
import mongoose from 'mongoose'
import {
    DB_NAME
} from './constants';

import express from 'express'

const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        })
    } catch (err) {
        console.log("ERROR: ", err);
    }
})()

*/