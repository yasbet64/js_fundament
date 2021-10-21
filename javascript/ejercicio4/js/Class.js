
const materias={
        fisica:[90,6,4,"fisica"],
        programacion:[84,8,2,"programacion"],
        logica:[92,8,4,"logica"],
        quimica:[96,8,4,"quimica"],
        biologia:[91,6,3,"biologia"],
        algebra:[72,7,4,"algebra"],
        matematica:[98,9,1,"matematica"]
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencias=materias[materia][0];
        let promedio=materias[materia][1];
        let trabajos=materias[materia][2];
        if(asistencias>=90){
            console.log(materias[materia][3]);
            console.log("%cAprobado","color:green")
        }else{
            console.log(materias[materia][3]);
            console.log("%cDesaprobado","color:red")

        }if(promedio>= 7){
            console.log("%c Promedio en orden","color:green")
        }else{
            console.log("%c Promedio desaprobado","color:red")
        }if(trabajos>= 3){
            console.log("%c Trabajos en orden","color:green")
        }else{
            console.log("%c Trabajos desaprobado","color:red")
        }
    }
}

aprobo()
