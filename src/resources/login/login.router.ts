import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { checkUser } from './login.service';

const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY'];
const loginRouter = express.Router();

loginRouter.route('/').post(asyncHandler(async (req: Request, res: Response) => {
    const user = req.body;
    const foundUser = await checkUser(user);
    if (foundUser) {
        const part = { userId: foundUser.id, login: foundUser.login };
        const token = jwt.sign(part, String(JWT_SECRET_KEY));
        return res.status(200).json({token: token});
    }

    return res.status(401).json({message: "Not authorized"});
}));

export { loginRouter };