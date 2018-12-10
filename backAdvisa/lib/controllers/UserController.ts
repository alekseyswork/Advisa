import { User } from '../models/UserModel';
import { Request, Response, Router } from 'express';

export class UserController {
    constructor() {


    }
    public addNewUser(req: Request, res: Response) {
        let user = new User(req.body);

        user.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res
                .status(200).json(user);
        });
    }

}