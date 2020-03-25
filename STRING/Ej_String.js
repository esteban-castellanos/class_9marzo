//Reemplazo fast fast

function reemplazoFastFast(textoAreemplazar,sacar,reemplazo)
    {
        console.log(textoAreemplazar.replace(sacar,reemplazo));
    }

reemplazoFastFast("A la grande le puse cuca","cuca","Mabel");


//¿Están hablando de mi?
function mencionar(texto, buscar)
{
    if(texto.indexOf(buscar)!= -1) console.log(true);
    else console.log(false);
}
mencionar("Oye March, has visto a ese nerd", "nerd");

//Solo el nombre
let texto="¡Hola!, soy Carli";
let licenciada= texto.slice(12);

console.log(texto);
console.log(licenciada);