function saludar(nombre){
    let frase=`hola ${nombre} que haces `;
    document.write(frase)
}

sal=prompt("cual es tu nombre");
saludar(sal)


 const revisar=(nombre)=>{
    document.write(`como estas ${nombre} `)
  }

revisar(sal);