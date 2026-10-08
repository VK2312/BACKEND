import jwt from 'jsonwebtoken';
import userAuthModels from '../models/userAuthModel.js';
import dotenv from 'dotenv';

dotenv.config();

const JWTSECRET = process.env.JWTSECRET

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const data = jwt.verify(token, JWTSECRET);
        const user = await userAuthModels.findById(data.id);

    req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            message:"User not found"
        })
    }
}

export default authenticate;