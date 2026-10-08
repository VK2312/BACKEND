import jwt from "jsonwebtoken";
import userAuthModels from '../models/userAuthModel.js';
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv';

dotenv.config();
const JWTSECRET = process.env.JWTSECRET


//CONTROLLER FOR REGISTERING THE USERS
const registerController = async (req, res) => {

    const {email, name, password} = req.body;
    const user = await userAuthModels.create({email, name, password: await bcrypt.hash(password, 10)});
    // console.log(user);

    //Token creation
    const token = jwt.sign({
        id:user._id
    }, JWTSECRET);

    res.status(201).json({
        message:"token generated successfully",
        data:{
            user:{
                email,
                password,
                name},
                token
            },
    });

}

//CONTROLLER FOR CHECKING WHICH USER IS REQUESTING
const userAuthenticationController = async (req, res) => {
    // const authHeader = req.headers.authorization;
    // console.log(authHeader);

    // const data = jwt.verify(authHeader, JWTSECRET);
    // console.log(data);
    // const user = await userAuthModels.findById(data.id);
    console.log(req.user);
}

export {registerController, userAuthenticationController}