const obtenerInformacion = (materia)=>{
    materias={
        fisica:["Perez","pedro ","pepe","maria","yas"],
        programacion:["pedro","pepe","maria"],
        logica:["pedro ","pepe","juan","maria","yas"],
        quimica:["pedro ","pepe","juan","maria","yas"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias]
    }else{
        return materias;
    }
        
}

const mostrarInformacion = (materia)=>{
    let informacion =obtenerInformacion(materia);


if (informacion !== false){
    profesor =obtenerInformacion(materia)[0][0];
    alumno=obtenerInformacion(materia)[0];
    alumno.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son : <b style="color:blue">${alumno}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion= obtenerInformacion()
    let cantidadTotal=0;
    let clasesPresentes=[];
    for(info in informacion){
        
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+info);
        }
    }

    return `<b style="color :blue">${alumno}</b> esta en ${cantidadTotal} clases</b><br>
    Sta cursando las clases: ${clasesPresentes}<br><br>`;
}

document.write(cantidadDeClases("pepe"))
