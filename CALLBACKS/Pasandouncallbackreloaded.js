/*La primera función debe llamarse agregarHttp . La misma recibe por parámetro una URL a la cual
 le concatena el String "http://" al comienzo de esa URL y luego retorna ese valor. 
 La segunda función se llama procesar  y recibe una lista de sitios web y una función. 
 La función procesar  devuelve un array conteniendo todos los resultados de aplicar a cada elemento
  la función pasada.
*/

//Concatenar la URL ingresada
 
function agregarHttp(url[]) 

{   
    let listar =[];
    listar.push(urlCompleta = "Http://" + url); 
}


//agregarHttp("www.google.com.ar");
//Listar todas las URL ingresadas en un array

function procesar(url,callback)
{
    return callback(url);
}


//procesar("www.google.com", agregarHttp);
/*
function ingresar(url)
{
    listar = [];
    for (i=0; i<url.length; i++)
    {
        listar.push(i)
    }
}
*/