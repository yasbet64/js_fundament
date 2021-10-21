/*let cadena = "cadena de prueba";
let caden = "jvascript lo maximo";
//resultado= cadena.concat(" "+caden);
//document.write(resultado);

let cadenatexto = "esto de prueba";
//let texto = " prueba";
let texto = "esto ";
resultado= cadenatexto.startsWith(texto);
//resultado= cadenatexto.endsWith(texto);
//document.write(resultado); 

let cat="mi nombre es yasbeth";
let inclu="es";
resul=cat.includes(inclu);
document.write(resul);

let cade="como estas ";
let ind="estoy aqui";
re=cade.indexOf("a");
//document.write(re)
document.write(cade[8]);

let text="hello good  good morning"
let te="name is"
 r=text.lastIndexOf("good");
 //document.write(re)
document.write(r);

let tex="abc";
 r=tex.padStart(10,"go");
document.write(r);

let tex="abc";
 r=tex.padEnd(10,"go");
document.write(r)

let tex="1234";
 r=tex.repeat(10);
document.write(r);*/

/*let cadena="hola como sestas ";
r= cadena.split("como");
document.write(r)

let caden="ABCDEFGH";
res= caden.substring(0,4);
document.write(res)
 
//convierte a minuscula
let cade="YASEBTH";
res= cade.toLowerCase();
document.write(res)

//convierte a mayucula
let caden="yasbeth";
resp= caden.toUpperCase();
document.write(resp)

 //convierte a string
 let caden=["yas", "say"];
resp= caden.toString();
document.write( resp[2])

//elimina  espacios en  blanco
let caden=" yas ";
resp= caden.trim();
document.write( resp.length)

//------------metodos de arrays
//elimina el ulyimo elemento
let nombres=["pedro", "maria","jorge"];
document.write(nombres+"<br>")
let r =nombres.pop()
document.write(r+"<br>")
document.write(nombres)

//elimina el primer elemento
let nombres=["pedro", "maria","jorge"];
document.write("Array Original "+nombres+"<br>")
let r =nombres.shift()
document.write("Elemento removido "+r+"<br>")
document.write("RESULTADO "+nombres)

//AGREGA UN ELEMENTO AL final de la lista
let nombres=["pedro", "maria","jorge"];
document.write("Array Original "+nombres+"<br>")
let r =nombres.push("juancito")
document.write("numero de elementos "+r+"<br>")
document.write("RESULTADO "+nombres)

//invierte el orden de los elementos
let numeros=[1,2,3,4,5,6,7,8,9];
document.write("Array Original "+numeros+"<br>")
let r =numeros.reverse();
document.write("ninvertido "+r+"<br>")
document.write("RESULTADO "+numeros)

//agrega elementos al inicio
let numeros=[3,4,5,6,7,8,9];
document.write("Array Original "+numeros+"<br>")
let r =numeros.unshift(1,2);
document.write("cantidad de elementos "+r+"<br>")
document.write("RESULTADO "+numeros)*

//ordena los elementos
let numeros=[6,7,3,8,9,4,5];
let nom=["yas","angel","felipe","juan"]
document.write("Array Original "+numeros+"<br>")
document.write("Original "+nom+"<br></br")
let r =numeros.sort();
let res =nom.sort();
document.write("cantidad de elementos "+r+"<br>")
document.write("RESULTADO "+numeros+"<br></br>")
document.write("RESULTADO "+nom)

//AGREGA o quita UN ELEMENTO  la lista
let nombres=["pedro", "maria","jorge"];
document.write("Array Original "+nombres+"<br>")
let r =nombres.splice(1,2,"juancito")
document.write("elementos que se quitara "+r+"<br>")
document.write("RESULTADO "+nombres)

//convierte en uns csdena y agregamos el separador que deseemos
let nombres=["pedro", "maria","jorge"];
document.write("Array Original "+nombres+"<br>")
let r =nombres.join(" ")
document.write("nueva cadena "+r+"<br>")

//devuelve una parte del array
let nombres=["pedro", "maria","jorge"];
document.write("Array Original "+nombres+"<br>")
let r =nombres.slice(0,-1)
document.write("nueva cadena "+r+"<br>")

//filter
let nombres=["pedro", "maria","jorge","meri","raul"];
let r =nombres.filter(numero => numero.length>4)
document.write(r+"<br>")*/

//forech
let nombres=["pedro", "maria","jorge","meri","raul"];
let r =nombres.forEach(numeros => document.write(numeros+"<br>"))


