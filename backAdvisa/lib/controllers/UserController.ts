import { User } from '../models/UserModel';
import { Request, Response, Router } from 'express';
import * as jsonwebtoken from 'jsonwebtoken';
// import * as bcrypt from 'bcrypt';

export class UserController {

    constructor() {

    }
    public addNewUser(req: Request, res: Response) {
        let user = new User(req.body);
        // bcrypt.hash(user.password,10)
        // .then(res=> user.password =res )
        // .catch(err=> res.status(500).json({
        //     error: err
        //  }));
        user.save((err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res
                .status(200).json(user);
        });
    }

    singin(req: Request, res: Response): any {
        throw new Error("Method not implemented.");
    }

}