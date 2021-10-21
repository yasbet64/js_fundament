
let materias={
        fisica:["Perez","pedro ","pepe","maria","yas"],
        programacion:["pedro","pepe","maria"],
        logica:["pedro ","pepe","juan","maria","yas"],
        quimica:["pedro ","pepe","juan","maria","yas"]
}
const inscribir = (alumno, materia)=>{
    personas= materias[materia];
    if(personas.length >=21){
        document.write(`lo siento  ${alumno}, las clases de ${materia} 
        ya estan llenas `)
    }else{
        personas.push(alumno);
        if(materia== "fisica"){
            materias={
                fisica: personas,
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:materias['quimica'] }
        }else if(materia== "programacion"){
            materias={
                fisica: materias['fisica'],
                programacion:personas ,
                logica:materias['logica'],
                quimica:materias['quimica'] }
        }else{ if(materia== "logica"){
                materias={
                    fisica: materias['fisica'],
                    programacion:materias['programacion'],
                    logica:personas,
                    quimica:materias['quimica'] }
        }else if(materia== "quimica'"){
                materias={
                    fisica: materias['fisica'],
                    programacion:materias['programacion']  ,
                    logica:materias['logica'],
                    quimica:personas}
            }
        
        }
       document.write(`felicidades ${alumno} te has inscrito ${materia}`)
    }   
}

document.write(materias['fisica']+"<br>")
inscribir("pedrito","fisica")
inscribir("edison","fisica")
inscribir("raul","fisica")
document.write("<br>"+ materias['fisica'])
