dinero=prompt("cunto dinero tienes");


if(dinero >= 0.6 && dinero < 1){
    alert("comprate un helado de agua")
}
else if( dinero >= 1 && dinero < 1.6 ){
    alert("comprate un helado de crema")
}
else if( dinero >= 1.6 && dinero < 1.7 ){
    alert("comprate un helado de heladix")
}
else if( dinero >= 1.7 && dinero < 1.8 ){
    alert("comprate un helado de heladovich")
}
else if( dinero >= 1.8 && dinero < 2.9 ){
    alert("comprate un helado de helardo")
}
else if( dinero >= 2.9 ){
    alert("comprate un helado de confites o el pote 1/4kg  ")
}
else {
    alert("tu dinero no te alcanza")
}