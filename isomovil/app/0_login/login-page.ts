/*
export function pageload(args: EventData){
    const page = <Page>args.object;
    page.bindingContext=model; 
}

let pageload=(args:EventData)=>{
}
export {pageload}
*/


/*
import { EventData } from "data/observable"
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Button } from "ui/button";

let pageload=(args:EventData)=>{
    let page=<Page>args.object;
    let cajaUsuario=<TextField>page.getViewById("idusuario");
    let cajaPassword=<TextField>page.getViewById("idpassword");
    let boton=<Button>page.getViewById("idbtnlogin");
    boton.on('tap', (args: EventData)=>{
        console.log(cajaUsuario.text+" "+cajaPassword.text);
        if(cajaUsuario.text=="admin" && cajaPassword.text=="123"){
            console.log("ingreso");  
        }else{
            alert("usuario no existe");
        }
    });
}
export {pageload}
*/

import { EventData } from "data/observable";
import { Page } from "ui/page";
import { LoginViewModel } from "./login-view-model";

let pageload=(args: EventData)=>{
    let page=<Page>args.object;

    //ENLASA LA PAGINA VISTA  CON EL VM
    let loginVM= new LoginViewModel(page);
    //loginVM.set("texttitulo", "aaaaaaaaaaaaaaa");
    page.bindingContext=loginVM;
}

export { pageload }

