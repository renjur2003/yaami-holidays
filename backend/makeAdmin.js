import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const makeAdmin = async () => {
    const email = process.argv[2];
    if (!email) {
        console.log('Please provide an email address as an argument.');
        process.exit(1);
    }

    try {
        const user = await User.findOne({ email });
        if (user) {
            user.isAdmin = true;
            await user.save();
            console.log(`User ${user.name} (${email}) is now an Admin.`);
        } else {
            console.log(`User with email ${email} not found.`);
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

makeAdmin();
