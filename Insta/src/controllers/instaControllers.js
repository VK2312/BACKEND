import {sendFiles} from '../services/storage.services.js';
import postModel from '../models/insta.Model.js';

export const createPostController = async (req, res) => {
    let file = req.file;
    let {caption} = req.body;

    console.log(caption);

    try {
        if(!caption || !image){
        return res.status(400).json({
            success:false,
            message:"field are required"
        });
    }
    } catch (error) {
        console.log(error);
    }

    let uploadImage =  await sendFiles(file.buffer, file.originalname);

    let post = await postModel.create({caption:caption, image:uploadImage.url});

    return res.status(201).json({
        success:true,
        message:"image successfully saved to Imagekit",
        data:post
    });
}

export const getAllPostController = async (req, res) => {
    try {
        const allPost = await postModel.find();
        return res.status(200).json(
            {
            success:true,
            message:"getting all the post",
            data:allPost
            }
        );
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
}
