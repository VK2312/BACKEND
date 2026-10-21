import config from '../config/config.js';
import jwt from 'jsonwebtoken';

export const generateTokens = ({userId}) => {
    const accessToken = jwt.sign({id:userId}, config.ACCESS_TOKEN_SECRET, {expiresIn:"15m"});
    const refreshToken = jwt.sign({id:userId}, config.REFRESH_TOKEN_SECRET, {expiresIn:"7d"});

    return {accessToken, refreshToken};
}

export function verifyAccessToken(Token){
    const decoded = jwt.verify(Token, config.ACCESS_TOKEN_SECRET);

    return decoded;
}

export function verifyRefreshToken(Token){
    const decoded = jwt.verify(Token, config.REFRESH_TOKEN_SECRET);

    return decoded;
}
