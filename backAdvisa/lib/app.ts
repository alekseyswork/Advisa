import * as express from "express";
import * as bodyParser from "body-parser";
import { AccountRoutes } from "./routes/AccountRoutes";
import * as mongoose from "mongoose";
import { Config } from './configuration/Config';
var cookieParser = require('cookie-parser');

class App {

    public app: express.Application;
    public routePrv: AccountRoutes = new AccountRoutes();
    public mongoUrl: string = Config.ConnectionStringDB;

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(function (req, res, next) {
            // res.setHeader('Access-Control-Allow-Origin', '*');
            // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
            // res.setHeader('Content-Type', 'application/json');
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            
            next();
        });
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl);        
    }

}

export default new App().app;