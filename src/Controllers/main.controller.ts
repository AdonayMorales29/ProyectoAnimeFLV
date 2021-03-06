import {Application, application} from "express";
import {MainService} from "../services/main.service";
import { runInThisContext } from "vm";

export class MainController{
    private mainservices:MainService;
    constructor(private app: Application){
        this.mainservices=new MainService();
        this.routes();
    }
    public routes(){
        this.app.get("/", this.mainservices.welcome)
    }
}

