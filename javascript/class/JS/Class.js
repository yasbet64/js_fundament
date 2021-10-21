class Animal{
    constructor(especie,edad,color){
        this.especie= especie;
        this.edad=edad;
        this.color=color
        this.info= `soy ${this.especie}, tengo ${this.edad} 
        añosy soy de color ${this.color}`;
    }

    verinfo(){
        document.write(this.info + "<br>")
    }
    
}
 
 class Perro extends Animal{

    constructor(especie,edad,color,raza){
        super (especie,edad,color);
        this.raza=null;
    }
    set setRaza(newName){
        this.raza=newName;
        document.write("ya se corrigio"+ "<br>")
    }

    get getRaza(){
        return this.raza;
    }
     static ladrar(){
        alert("waw"); 
    }

 }

let perro =new Perro("perro","5","verde","doberman");
let gato =new Animal("perro","5","verde","doberman");


perro.setRaza="firu";
document.write(perro.getRaza);