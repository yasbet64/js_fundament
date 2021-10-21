/*let free =false ;

const validarCliente=(time)=>{
  let edad = prompt("cual es tu edad");
  if (edad>18){
    if(time>=2 && time < 7 && free==false){
      alert("puedes pasar sin pagar");
      free=true;
    }else{
      alert("pasa pagando");
    }
    
  }else{
    alert("no puedes pasar");
  }
}

validarCliente(23);
validarCliente(5); 

*/

/*let cantidad=prompt("Cuantos alumnos son:")
let alumnTotal=[];

for(i=0; i<cantidad;i++){
  alumnTotal[i]=[prompt("Nombre "+(i+1)),0]
  
}

const tomarAsistencia=(nombre,p)=>{
  let presencia=prompt(nombre);
  if(presencia =="p" || presencia =="P"){
    alumnTotal[p][1]++;
  }
}

for(i=0; i<30; i++){
  for(alummo in alumnTotal){
    tomarAsistencia(alumnTotal[alummo][0],alummo)
  }
}

for(alummo in alumnTotal){
  let resultado=`${alumnTotal[alummo][0]}:<br>
  --------Presente: ${alumnTotal[alummo][1]}<br>
  --------Ausente: ${30 -alumnTotal[alummo][1]}`;
  if (30-alumnTotal[alummo][1]>18){
    resultado +=" REPROBADO POR ANASISTENCIAS<br><br>";
    }else{
      resultado +=" Aprobado<br>";
  }document.write(resultado);
} */

const sumar=(num1, num2)=>{
  return parseInt(num1)+parseInt(num2)
}
const restar=(num1, num2)=>{
  return parseInt(num1)-parseInt(num2);
}

const multiplicar=(num1, num2)=>{
  return parseInt(num1)*parseInt(num2);
}
const dividir=(num1, num2)=>{
  return parseInt(num1)/parseInt(num2);
}

alert("que peracion quieres realizar");
operacion=prompt("1:suma, 2:resta, 3:multiplicacion, 4:division");

if(operacion==1){
  let num1=prompt("primer numero: ");
  let num2=prompt("segundo numero: ");
  resultado=sumar(num1,num2);
  alert(`resultado es:  ${resultado}`)
}else if(operacion==2){
  let num1=prompt("primer numero: ");
  let num2=prompt("segundo numero: ");
  resultado=restar(num1,num2);
  alert(`resultado es:  ${resultado}`)
}else if(operacion==3){
  let num1=prompt("primer numero: ");
  let num2=prompt("segundo numero: ");
  resultado=multiplicar(num1,num2);
  alert(`resultado es:  ${resultado}`)
}else if(operacion==4){
  let num1=prompt("primer numero: ");
  let num2=prompt("segundo numero: ");
  resultado=dividir(num1,num2);
  alert(`resultado es: ${resultado}`)
}else
alert("los datos son incorrectos")
