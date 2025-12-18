import asyncHandler from 'express-async-handler';

/**
 * Simple middleware to protect admin routes using a secret key
 * instead of a full user/password account system.
 */
const simpleAdminProtect = asyncHandler(async (req, res, next) => {
    const adminKey = req.headers['x-admin-key'];
    const secretKey = process.env.ADMIN_SECRET_KEY || 'yaami2024'; // Fallback if not in .env

    if (adminKey && adminKey === secretKey) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized: Invalid or missing Admin Secret Key');
    }
});

export { simpleAdminProtect };
