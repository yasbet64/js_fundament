class Calculadora{
    constructor(){

    }
    
    sumar(num1, num2){
        return parseInt(num1)+parseInt(num2);}

    restar(num1, num2){
        return parseInt(num1)-parseInt(num2);}
    
    multiplicar(num1, num2){
        return parseInt(num1)*parseInt(num2); }

    dividir(num1, num2){
        return parseInt(num1)/parseInt(num2);}

    potencia(num1,exp){
        let numero=num1;
        for (var i=1; i<exp; i++){
            numero=numero*num1;
        }
        return numero;
    }

    raizCuadrada(num1){
        return Math.sqrt(num1)
    }
    raizCubica(num1){
        return Math.cbrt(num1)
    }
}

    
    const calculadora = new Calculadora();
    alert("que peracion quieres realizar");
    let operacion=prompt("1:suma, 2:resta, 3:multiplicacion, 4:division, 5:pontencia, 6: Raiz Cuadrada, 7:Raiz Cubica");
    
    if(operacion==1){
        let num1=prompt("primer numero: ");
        let num2=prompt("segundo numero: ");
        resultado= calculadora.sumar(num1,num2);
        alert(`resultado es:  ${resultado}`);
    }else if(operacion==2){
        let num1=prompt("primer numero: ");
        let num2=prompt("segundo numero: ");
        resultado=calculadora.restar(num1,num2);
        alert(`resultado es:  ${resultado}`)
    }else if(operacion==3){
        let num1=prompt("primer numero: ");
        let num2=prompt("segundo numero: ");
        resultado=calculadora.multiplicar(num1,num2);
        alert(`resultado es:  ${resultado}`)
    }else if(operacion==4){
        let num1=prompt("primer numero: ");
        let num2=prompt("segundo numero: ");
        resultado=calculadora.dividir(num1,num2);
        alert(`resultado es: ${resultado}`)
    }else if(operacion==5){
        let num1=prompt("El numero: ");
        let exp=prompt("Exponencial: ");
        resultado=calculadora.potencia(num1,exp);
        alert(`resultado es: ${resultado}`)
    }else if(operacion==6){
        let num1=prompt("La raiz cuadrada de : ");
        resultado=calculadora.raizCuadrada(num1);
        alert(`resultado es: ${resultado}`)
    }else if(operacion==7){
        let num1=prompt("La raiz cubica de: ");
        resultado=calculadora.raizCubica(num1);
        alert(`resultado es: ${resultado}`)
    }else
    alert("los datos son incorrectos")
    
    

