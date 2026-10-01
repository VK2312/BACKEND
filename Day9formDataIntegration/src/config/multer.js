import multer from 'multer';

// DISK STORAGE FOR UPLOADING DATA LOCALLY
// const storage = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, "upload/");
//     },
//     filename : (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// });

//MEMORY STORAGE FOR SAVING DATA ON CLOUD
const storage = multer.memoryStorage();

const upload = multer({storage});

export default upload;