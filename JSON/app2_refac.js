let leerJSONdeTareas = require("./tareas.js"); // importar modulo

let argumento0 = process.argv[0]; //argumento por defecto
let argumento1 = process.argv[1]; //argumento por defecto
let accion = process.argv[2]; //argumento del usuario

switch (accion)
{
    case "listar":
        console.log("listado de tareas:");
        let tareas = leerJSONdeTareas.leer(); 
        
        /*1. Modificar la funcionalidad de  listar t  areas. Deberás utilizar el método f  orEach.  Recordá que f  orEach  puede recibir dos parámetros, siendo el segundo nuestro index, 
        es posible que tengas que usarlo.*/
        // con el foreach nos olvidamos de los indices.       
        
        tareas.forEach((tarea, i) => 
        {
            console.log(i+"-"+ tarea.titulo +"-"+ tarea.estado);    
        });
        
        //leerJSONdeTareas.escribirJSON(tareas);// llamar a la funcion, aca se ve el console.log de la linea 35 de tareas.js
        
        /*CON UN FOR NORMAL
        for (let i =0; i< tareas.length; i++ )
        {
            console.log(i+"-"+ tareas[i].titulo+"-"+ tareas[i].estado);
        }
        */

    break;
    case "crear":
        //la paso por argumento
        leerJSONdeTareas.guardarTarea(tareas);
    case undefined:
        console.log("Necesito una accion (listar)");
        break;
    default:
        console.log("No comprendo la accion que quieres ejecutar");
        
        
        
}
 