import express,{Application} from "express"

import {MainController} from "./Controllers/main.controller";

import bodyParser from "body-parser"
import cors from "cors"

class App{
    public app:Application;
    public mainController: MainController;
    constructor(){
        this.app=express();
        this.setConfig();
        this.mainController= new MainController(this.app);
    }
    private setConfig(){
        this.app.use(bodyParser.json({limit:"50mb"}));
        this.app.use(bodyParser.urlencoded({limit:"50mb", extended:true}));
        this.app.use(cors());
    }
}

export default new App().app;
