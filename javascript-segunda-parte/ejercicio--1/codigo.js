/**
 * una ventana para q me diga el ancho y alto y realizar la compra
 */
let ancho =window.screen.availHeight;
let alto= window.screen.availHeight;
 comprar = confirm(`el alto es :~${alto} y el ancho es ${ancho}`)

 if(comprar){
     alert("compra realizada")
 }else{
     alert("compra cancelada")
 }