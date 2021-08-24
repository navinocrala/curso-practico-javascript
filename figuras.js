// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
   return lado * 4;
} 


//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + " cm2")

function areaCuadrado(lado) {
    return lado * lado + " cm2";
}

console.groupEnd();
// Código del cuadrado

// Código del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm y " 
//     + baseTriangulo 
//     + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("La altura del trianguro es: " + alturaTriangulo + "cm");

function perimetroTriangulo(a, b, c) {
    return a + b + c + " cm";
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2 + " cm2";
}

// console.log("El perímetro del triánguro es de " + perimetroTriangulo + " cm.");
// console.log("El área del triágulo es: "+ areaTriangulo + "cm2");

console.groupEnd();    
// Codigo del triángulo

// Código del círculo
console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
function perimetroCirculo(radio){
    return radio * 2 * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.log("El radio del círculo es " + radioCirculo + "cm");
// console.log("El perímetro del círculo es " + diametroCirculo + "cm");
// console.log("El área del círculo es " + areaCirculo + "cm^2");

console.groupEnd();