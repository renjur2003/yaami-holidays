import path from 'path';
import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';

const router = express.Router();

const storage = multer.storage = multer.diskStorage({}); // Use default temp storage

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Images only!');
    }
}

// Upload to Cloudinary
router.post('/', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded');
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'yaami-boats'
        });
        res.send(result.secure_url);
    } catch (error) {
        console.error(error);
        res.status(500).send('Upload failed');
    }
});

export default router;
