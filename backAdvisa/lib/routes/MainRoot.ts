import * as express from "express";
import { Router } from "express";
import {userRouter} from "./UserRoutes"
class MainRoot{
    /**
     *
     */
    root: Router;
    constructor() {
        this.root =Router();
        this.initRoots();
    }
    
    initRoots(){
        this.root.use('api/user', userRouter)
    }

    
}
export const routerMain = new MainRoot().root;
