import userAuthModel from '../models/userAuthModel.js';
import bcrypt from 'bcryptjs';
import {generateTokens, verifyAccessToken, verifyRefreshToken} from '../utils/auth.js';

/**
 *   @POST /api/post/register
 */
const registerController = async (req, res) => {
    const {name, email, password} = req.body;

    //checking if user exists or not
    const isUserExists = await userAuthModel.findOne({email});

    //if user exists then returning 
    if(isUserExists){
        return res.status(400).json({
            message:"User already exists",
            errors:[{
                field:"email",
                message:"User already exists"
            }]
        })
    }

    //if user does not exists in our database then we will create user    
    const user = await userAuthModel.create({
        email,
        name,
        passwordHash : await bcrypt.hash(password, 12),
    });

    //generating our accessToken and refreshToken
    const {accessToken, refreshToken} = generateTokens({userId: user._id});

    user.refreshToken = refreshToken
    await user.save();

    //Setting the value of refreshToken in cookies
    res.cookie("refreshToken", refreshToken, {
        httpOnly:true,
    });

    console.log(accessToken);

    res.status(201).json({
        message:"User registered successfully",
        data:{
            user:{
                name:user.name,
                email:user.email
            },
            accessToken
        },
        
    });
}

/**
 * @GET /api/auth/me
 */
const getMeController = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    try {
        const decoded = verifyAccessToken(token);
        const user = await userAuthModel.findById(decoded.id);
        res.status(200).json({
            message:"user fetched successfully",
        data:{
            user:{
                name : user.name,
                email : user.email
                
            }
        }
        });

    } catch (error) {
        return res.status(401).json({
            message:"Unauthorised, Invalid or expired access token"
        });
    }
}



/**
 *   @POST /api/post/refresh
 */
const refreshController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken){
        return res.status(401).json({
            message:"Unauthorised, refresh token not found"
        });
    }

    try {
        const decoded = verifyRefreshToken(refreshToken);
        const user = await userAuthModel.findById(decoded.id);
        if(refreshToken !== user.refreshToken){
            user.refreshToken = null;
            await user.save();

            return res.status(401).json({
                message:"Unauthorised"
            });
        }


        const {accessToken, refreshToken:newRefreshToken} = generateTokens({userId:user._id});

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly:true
        });

        user.refreshToken = newRefreshToken
        await user.save()

        res.status(200).json({
            message:"Tokens refreshed successfully",
            accessToken
        });
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorised, invalid"
        });
    }
}


export { registerController, getMeController, refreshController }