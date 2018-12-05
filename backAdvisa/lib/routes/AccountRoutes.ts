import {Request, Response, NextFunction, Router} from 'express';
import {AccountController} from "../controllers/AccountController";
import express = require('express');

export class AccountRoutes {

    public accountController : AccountController = new AccountController()

    constructor(private api : Router) {
        this.api.use('/user',this.singin);
    }
    public singin(req : Request, res : Response) {
        res
            .status(200)
            .send({message: 'GET request df successfulll!!!!'})
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