const button= document.querySelector(".button");
const contenedor= document.querySelector(".contenedor")

contenedor.addEventListener("click",(e)=>{
    alert("click en el contenedor")
},true)

button.addEventListener("click",(e)=>{
    alert("click en el botton")
    e.stopPropagation()
})

/* para poder realizar eventos con parametros

button.addEventListener ("click", ()=>{
    alert("hola")
});


  */
