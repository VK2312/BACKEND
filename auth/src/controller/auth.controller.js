import authModel from '../model/auth.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const saltRound = 10;

const registerController = async (req, res) => {
    try {
        
        let {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({
            message:"Enter a valid data",
        });
    }

    const registerUser =  await authModel.findOne({email});

    if(registerUser){
        return res.status(409).json({
            message:"User already registered",
        });
    }

    //SALTING IN PASSWORD
    const hashedPassword = await bcrypt.hash(password, saltRound);

    //CREATE USER
    const user = await authModel.create({
        username,
        email,
        password:hashedPassword,
       })

    //CREATING TOKEN 
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);


    return res.status(201).json({
        message:"User created successfully",
        username: user.username,
        email: user.email,
        token,
    });
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong",
            error:error.message
        });
    };
};

export default registerController;