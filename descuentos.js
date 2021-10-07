

function calcularPrecioConDescuento (precio, descuento){
    const precioResultate = precio - (precio * descuento / 100);
    return precioResultate;
}

function calcularCupones(cupon){
     if (cupon == "JuanDC_es_Batman") {
         descuento = 15;
     }
     else if (cupon == "descuento_primavera"){
         descuento = 30;
     }
     else if (cupon == "es_un_secreto"){
         descuento = 25;
     }
     else {
         descuento = false;
     }
     return descuento;
}


function presentarPrecio(){
    const inputPrecio = document.getElementById("inputPrecio");
    const inputPrecioValue = inputPrecio.value;
    const inputCupon = document.getElementById("inputCupon");
    const inputCuponValue = inputCupon.value;

    if (calcularCupones(inputCuponValue) == false){
        resultado = document.getElementById("resultado");
        resultado.innerText = "El cupón ingresado es inválido, favor verificar.";
        return resultado.innerText;
    }
    else {
        const precioDescontado = calcularPrecioConDescuento(inputPrecioValue, calcularCupones(inputCuponValue));
        resultado = document.getElementById("resultado");
        resultado.innerText = "El total a pagar es Gs. " + precioDescontado;
        return resultado.innerText;
    }
}