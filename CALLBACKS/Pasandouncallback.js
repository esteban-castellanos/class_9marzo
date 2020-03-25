function doble(valor1)
{
    return valor1 *2;
}
function triple(valor1)
{
    return valor1 *3;
}
function apply(valor1, operacion)
{
    console.log(operacion(valor1));
}

apply(3,triple);