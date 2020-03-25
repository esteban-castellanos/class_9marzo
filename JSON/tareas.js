/*
//Modulo que permite trabajar con archivos del filesystem
const fs = require("fs");

let leer = function (archivoJSON)
{
    return JSON.parse(fs.readFileSync("tareas.json", "utf-8"));

}

module.exports = leer; //exportamos el modulo
// this. es para hacer referencia a una propiedad
*/
const fs = require("fs"); 
let archivoJSON = 
{
    nombre: "tareas.json",
    leer: function()
    {
        let jsonFile = fs.readFileSync(this.nombre, "utf-8"); //leemos el archivo json
        return JSON.parse(jsonFile); //lo convertimos a objeto literal
    },

    /*2. Brindar la posibilidad al usuario de guardar nuevas tareas. Para esto:
    a. Crear una función llamada  escribirJSON d  entro de nuestro módulo
    tareas  que se encargue de solamente reescribir nuestro archivo tareas.json . Para esto es obligatorio que utilices el método  writeFileSync delmóduloF  S .Tenerencuentaque:
    i. La función debe recibir un array de tareas.
    ii. Debes convertir a JSON el array que reciba como parámetro.
    */
    escribirJSON: function(arrayTareas)
    {
       //primero convertir el array en Json

       let json = JSON.stringify(arrayTareas, null, " ");
       //console.log(json); //mostrar que tiene la variable json

       //guardar el json en el archivo tareas.json
       
       fs.writeFileSync(this.nombre, json);// json son los datos a guardar

   },
   /*Crearotrafunciónllamada guardarTarea .Esta recibirá una tarea(objeto) como parámetro y luego de su ejecución nuestra nueva tarea 
   debe estar agregada en el archivo  tareas.json . Tené en cuenta que deberás utilizar la función  escribirJSON  creada anteriormente para esto.*/
   guardarTarea: function(tarea)
   {
    
    //tengo la tarea, necesito como leer lo que ya tengo y agregarle la nueva tarea
    let listaTareas = this.leer();
    //agregar la tarea en la lista de tareas.json que ya existe con un .push()
    listaTareas.push(tarea);
    this.escribirJSON(listaTareas);//Guardar el archivo con la nueva lista

   }
}

module.exports = archivoJSON; // exportamos el modulo