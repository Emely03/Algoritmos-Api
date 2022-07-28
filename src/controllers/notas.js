const notasControllers = {};

notasControllers.create = (req,res) => {
let notas_finales = []; 
let perdieron = []; 
let hablitan = []; 
let mayor_nota = {};
let ganaron=0;
let response={}
let nota_mayor = 0

    let array_estudiantes= req.body.estudiantes
 
    for (let index = 0; index < array_estudiantes.length; index++) {
        const estudiante = array_estudiantes[index];
        //calcular nota definitiva
        let nota_definitiva = (estudiante.nota1+estudiante.nota2+estudiante.nota3+estudiante.nota4+estudiante.nota5)/5;
        let objeto_estudiante={}
        objeto_estudiante['nombre'] = estudiante.nombre;
        objeto_estudiante['nota definitiva'] = nota_definitiva;
        notas_finales.push(objeto_estudiante);
        //calcular mayor nota
        if (nota_definitiva>nota_mayor) {
            nota_mayor= nota_definitiva;
            mayor_nota['nombre'] = estudiante.nombre;
            mayor_nota['nota'] = nota_mayor;
        }
        if(nota_definitiva<2.0){
            let nota_perdieron={}
        nota_perdieron['nombre'] = estudiante.nombre;
        nota_perdieron['perdieron'] = nota_definitiva;
        perdieron.push(nota_perdieron);
        }
        if(nota_definitiva<3.0 && nota_definitiva>2.0){
            let est_habilitan={}
            est_habilitan['nombre']=estudiante.nombre;
            est_habilitan['habilitan']=nota_definitiva;
            hablitan.push(est_habilitan)
        }
        if(nota_definitiva>3.0){
            ganaron++;
        }

    }

    response['notas_finales'] = notas_finales
    response['mayor_nota'] = mayor_nota
    response['perdieron'] = perdieron
    response['habilitan']=hablitan
    response['ganaron']=ganaron
  

    res.json(response);
}

module.exports = notasControllers;