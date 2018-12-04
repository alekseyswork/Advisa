import {Request, Response, NextFunction} from "express";
import { AccountController } from "../controllers/AccountController";

export class AccountRoutes { 
    
    public accountController: AccountController = new AccountController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request df successfulll!!!!'
            })
        })
       
    }
}