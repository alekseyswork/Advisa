import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AccountModel = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    email: {
        type: String,
        required: 'Enter a email'          
    },
    company: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});