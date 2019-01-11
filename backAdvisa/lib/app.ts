import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {Config} from './configuration/Config';
import { Router } from 'express';
var cookieParser = require('cookie-parser');
import {routerMain} from "./routes/MainRoot"

class App {

    public app : express.Application;
    public mongoUrl : string = Config.ConnectionStringDB;
    public api:Router;

    constructor() {
        this.app = express();
        this.api =express.Router();
        
        this.config();
        this.app.use(routerMain);
        this.mongoSetup();
    }

    private config() : void {
        this
            .app
            .use(bodyParser.json());
        this
            .app
            .use(bodyParser.urlencoded({extended: false}));
        this
            .app
            .use(cookieParser());
        this
            .app
            .use(function (req, res, next) {
                // res.setHeader('Access-Control-Allow-Origin', '*');
                // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,
                // Content-Type, Accept'); res.setHeader('Access-Control-Allow-Methods', 'POST,
                // GET, PATCH, DELETE, OPTIONS'); res.setHeader('Content-Type',
                // 'application/json');
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Acc" +
                        "ess-Control-Request-Method, Access-Control-Request-Headers");

                next();
            });
    }

    private mongoSetup() : void {
        mongoose
            .connect(this.mongoUrl)
            .then(() => console.log("Connected to Mongo"))
            .catch(() => console.error(err => `cannot connect to mongoDb ${err}`));
    }

}

export default new App().app;