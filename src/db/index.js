import mongoose from 'mongoose';
import {
    DB_NAME
} from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected!!! DB HOST : ${connectionInstance.connection.host}`) // read more about connection instance
        
    } catch(err) {
        console.log("MongoDB connection Failed: ", err);
        process.exit(1); //learn more about this
    }
}

export default connectDB;