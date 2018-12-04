import * as express from "express";
import * as bodyParser from "body-parser";
import { AccountRoutes } from "./routes/AccountRoutes";
import * as mongoose from "mongoose";
import { Config } from './configuration/Config';

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
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl);        
    }

}

export default new App().app;