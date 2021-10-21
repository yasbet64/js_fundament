class App{
    constructor(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada= false;
        this.instalada=false;
    }

    abrir(){
        if(this.iniciada==false  && this.instalada==true){
            this.iniciada=true;
            alert("app iniciada");
        }
    }

    cerrar(){
     if (this.iniciada==true  && this.instalada==true){
        this.iniciada=false;
        alert("app cerrada ");}
    }

    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            alert("app instalada correctamente");
        }
    }

    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert("app desinstalada coorectamente")
        }
    }   
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br></br>`
    } 
}
app=new App("16.00","5 estrellas","900mb");
app1=new App("16.00","2 estrellas","900mb");
app2=new App("16.00","7 estrellas","900mb");
app3=new App("16.00","1 estrellas","900mb");
app4=new App("16.00","3 estrellas","900mb");

document.write(
app.appInfo(),
app1.appInfo(),
app2.appInfo(),
app3.appInfo(),
app4.appInfo())
