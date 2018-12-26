import {Request, Response, NextFunction, Router} from 'express';
import {UserController} from "../controllers/UserController";
import express = require('express');

class UserRoutes {
    UserController : UserController;

    public root: Router;
    constructor() {
        this.UserController = new UserController();
        this.root =Router();
        this.init();
    }

    private singup = (req : Request, res : Response) => {
        this
            .UserController
            .addNewUser(req, res);

    }

    private singin = (req : Request, res : Response) => {
        this
            .UserController
            .singin(req, res);

    }

    private init =() : void =>{
        this.root.use("/signup",this.singup) ;
        this.root.use("/singin",this.singin) ;
    }
}
export const userRouter= new UserRoutes().root;