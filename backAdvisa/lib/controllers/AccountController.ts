import * as mongoose from 'mongoose';
import { AccountModel } from '../models/AccountModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Account', AccountModel);

export class AccountController{

    public addNewContact (req: Request, res: Response) {                
        let newContact = new Contact(req.body);
    
        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }
    
}