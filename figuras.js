// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2")
console.groupEnd();
// Código del cuadrado

// Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("La altura del trianguro es: " + alturaTriangulo + "cm");

console.log("El perímetro del triánguro es de " + perimetroTriangulo + " cm.");
console.log("El área del triágulo es: "+ areaTriangulo + "cm2");

console.groupEnd();    
// Codigo del triángulo

// Código del círculo
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del círculo es " + radioCirculo + "cm");
console.log("El perímetro del círculo es " + diametroCirculo + "cm");
console.log("El área del círculo es " + areaCirculo + "cm^2");

console.groupEnd();