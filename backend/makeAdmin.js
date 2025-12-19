import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const makeAdmin = async () => {
    const email = process.argv[2];
    if (!email) {
        process.exit(1);
    }

    try {
        const user = await User.findOne({ email });
        if (user) {
            user.isAdmin = true;
            await user.save();
        } else {

        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

makeAdmin();
