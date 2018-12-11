import {Request, Response, NextFunction, Router} from 'express';
import {UserController} from "../controllers/UserController";
import express = require('express');

export class UserRoutes {
    UserController : UserController;

    constructor(private api : Router) {
        this.UserController = new UserController();
        this
            .api
            .use('/user', this.singin);

    }
    singin = (req : Request, res : Response) => {
        this
            .UserController
            .addNewUser(req, res);

    }

    public routes(app) : void {
        app
            .route('/user')
            .get((req : Request, res : Response) => {
                res
                    .status(200)
                    .send({message: 'GET request df successfulll!!!!'})
            })
            .post((req : Request, res : Response) => {
                res
                    .status(200)
                    .send({
                        message: req.body + 'GET request df susdfccessfulll 223 df!!!!'
                    })
            })

    }
}