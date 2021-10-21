
const contenedor= document.querySelector(".flex-container");

const boton = document.querySelector(".send-button");
let valorAntiguo= boton.value;
boton.value = valorAntiguo.toUpperCase

function crearLlave(nombre,modelo,precio){
  
    img="<img class='llave-img' src='llave.jpg'>"
    nombre= `<h2>${nombre}</h2>`;
    modelo= `<h3 >${modelo}</h3>`;
    precio= `<p>Precio: ${precio}</p>`;
    return [img,nombre,modelo,precio]
}
 const changeHidden = (Number)=>{
     document.querySelector(".key-data").value=number;
 }
let documentFragment = document.createDocumentFragment()

for(var i=0;i<20; i++){
    
    let modelorandom =Math.round( Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10*30);
    let llave= crearLlave(`llave ${i}`,`modelo ${modelorandom}`,precioRandom)
    let div = document.createElement("Div");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value= modelorandom;
    });
    div.tabIndex=i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML=llave[0]+llave[1]+llave[2]+llave[3];
    documentFragment.appendChild(div);
    
}
contenedor.appendChild(documentFragment);

