import { Observable, EventData } from "data/observable";

import { topmost } from "tns-core-modules/ui/frame";
import { Page } from "ui/page";

import * as dialogs from "tns-core-modules/ui/dialogs";

import * as http from "http";

export class LoginViewModel extends Observable {

    private _texttitulo:String;
    textbtnlogin:String;

    private _usuario:String;
    private _password:String;

    constructor(page:Page) {
        super();
        this._texttitulo="INGRESA TU CUENTA";
        this.textbtnlogin="INGRESAR";
        //oculta el actionbar
        page.actionBarHidden = true;
    }

    btnenviar(args: EventData){
        if(typeof this.usuario== 'undefined'){
            alert("Ingrese su usuario.");
            return;
        }
        if(typeof this.password == 'undefined'){
            alert("Ingrese su contraseña");
            return;
        }
  
        if(this.usuario.trim().length===0 /*|| this.password.trim().length===0*/){
            alert("Porfavor verifique su usuario y/o contraseña.");
            return;
        }

        http.getJSON("http://132.148.16.211:8080/isofacil-webservice/ws/adm/login/"+this.usuario.toUpperCase()+"/"+this.password).then(function (r) {
            //// Argument (r) is JSON!
            console.log(JSON.stringify(r));
            console.log()
            console.log("antes de enviar a la siguiente pantalla");
            var navegacion= {
                moduleName: "./1_home/home-page",
                context: {
                    param1: "parametro1",
                    param2: "parametro2",
                }
            }
            topmost().navigate(navegacion);

        }, function (e) {
            //// Argument (e) is Error!
            console.log("ERROR EN EL SERVIDOR "+e)
            alert("Usuario no encontrado, porfavor verifique sus datos.33333333");
        });   
    }
/*
    btnenviar(args: GestureEventData){
        console.log("aAA");
    }
  */  

    public get texttitulo():String{
        return this._texttitulo;
    } 
    public set texttitulo(value: String){
        this._texttitulo=value;
    } 

    public get usuario():String{
        return this._usuario;
    } 
    public set usuario(value: String){
        this._usuario=value;
    }
    
    public get password():String{
        return this._password;
    } 
    public set password(value: String){
        this._password=value;
    }
}