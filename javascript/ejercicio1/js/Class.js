class Celular{
    constructor(resolucion,peso,color,camara,ram){
        this.resolucion= resolucion;
        this.peso=peso;
        this.color=color;
        this.camara=camara;
        this.ram=ram;
        this.encendido=false;
    }
    presionarBotonEncendido(){
        if(this.encendido==false){
            alert("celular prendido");
            this.encendido=true;
        }else{
            alert("el celular apagado")
        }
    }
    reiniciar(){
        if(this.encendido==true){
            alert("reiniciar celular")
        }else{
            alert("el celular esta apagado")
        }
    }

    tomarFoto(){
        alert(`foto tomada con una resolucion de : ${this.resolucion}`)
    }
    tomarFoto(){
        alert(`grabando video con una resolucion de : ${this.resolucion}`)
    }  
    mostrarInfo(){
        return `
        Color: <b></b> ${this.color}<br>
        Peso: <b></b> ${this.peso}<br>
        Resoluicion: <b></b> ${this.resolucion}<br>
        Memoria ram: <b></b>${this.ram}<br>
        Camara: <b></b> ${this.camara}<br>`
    }
}

class CelularAltaGama extends Celular{
    constructor(resolucion,peso,color,camara,ram,rdce){
        super(resolucion,peso,color,camara,ram);
        this.resolucionDeCamaraExtra=rdce;
    }
    grabarVideoLento(){
        alert("estas grabando video lento");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion extra: ${this.resolucionDeCamaraExtra}`;
    }
}
 

let celular1 =new Celular("250 mps","200gr","verde","1050 px","2 RM");
let celular2 =new CelularAltaGama("250 mps","200gr","ROJO","1050 px","2 RM","fulHD");
let celular3 =new CelularAltaGama("250 mps","200gr","AZUL","1050 px","2 RM","FULhd");

document.write(`
${celular1.mostrarInfo()}<br>
${celular2.infoAltaGama()}<br><br>
${celular3.infoAltaGama()}<br>`);


