import * as mongoose from 'mongoose';
import { IUser } from 'classes/IUser';

const Schema = mongoose.Schema;
interface IUserModel extends IUser, mongoose.Document { };

const UserModel = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    email: {
        type: String,
        required: 'Enter a email'          
    },
    password: {
        type: String            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


export var User = mongoose.model<IUserModel>("User", UserModel);