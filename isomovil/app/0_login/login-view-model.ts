import { Observable, EventData } from "data/observable";

import { topmost } from "tns-core-modules/ui/frame";
import { Page } from "ui/page";
//import { http } from "http";
import * as http from "http";

export class LoginViewModel extends Observable {

    private _texttitulo:String;
    textbtnlogin:String;

    constructor(page:Page) {
        super();
        this._texttitulo="INGRESA TU CUENTA";
        page.actionBarHidden = true;
        this.textbtnlogin="INGRESAR";
    }

    public get texttitulo():String{
        return this._texttitulo;
    } 
    public set texttitulo(value: String){
        this._texttitulo=value;
    } 

    btnenviar(args: EventData){
        
        console.log("antes de enviar a la siguiente pantalla");
        topmost().navigate("./1_home/home-page");
        /*http.request({ url: "190.232.7.26:8080/WebServiceRESTFull/rest/service/json", method: "GET" }).then(function (response) {
            //// Argument (response) is HttpResponse!
            //// Content property of the response is HttpContent!
            var str = response.content.toString();
            var obj = response.content.toJSON();
            var img = response.content.toImage();
            console.log(str);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });*/
       
    }
/*
    btnenviar(args: GestureEventData){
        console.log("aAA");
    }
  */  
}