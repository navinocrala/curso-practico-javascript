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


// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es " + perimetro + " cm.");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es " + area );
}

function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("ladoATriangulo");
    const valueA = parseInt(inputA.value);
    const inputB = document.getElementById("ladoBTriangulo");
    const valueB = parseInt(inputB.value);
    const inputC = document.getElementById("ladoCTriangulo");
    const valueC = parseInt(inputC.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueC);
    alert("El perímetro del triángulo es " + perimetro);
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("alturaTriangulo");
    const base = document.getElementById("baseTriangulo");
    const alturaValue = parseInt(altura.value);
    const baseValue = parseInt(base.value);

    const area = areaTriangulo(alturaValue, baseValue);
    alert("El área del triángulo es " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es " + perimetro + " cm.");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El área del círculo es " + area );
}

function alturaIsosceles(a, b, c) {
    if (a + b > c && a + c > b && b + c > a && a - b < c  && a - c < b && b - c < a) {
        if (a == b || b == c || c == a) {
            if (a == b) {
                const baseIsosceles = c / 2;
                const hipotenusa = a;
                const altura = Math.sqrt((hipotenusa * hipotenusa) - (baseIsosceles * baseIsosceles));
                return "La altura del triángulo isósceles es de " + altura + " cm; y tu base de " + baseIsosceles + " cm.";
            }
            else if (a == c) {
                const baseIsosceles = b / 2;
                const hipotenusa = a;
                const altura = Math.sqrt((hipotenusa * hipotenusa) - (baseIsosceles * baseIsosceles));
                return "La altura del triángulo isósceles es de " + altura + " cm, y tu base de " + baseIsosceles + " cm.";
            }
            else if (b == c) {
                const baseIsosceles = a / 2;
                const hipotenusa = c;
                const altura = Math.sqrt((hipotenusa * hipotenusa) - (baseIsosceles * baseIsosceles));
                return "La altura del triángulo isósceles es de " + altura + " cm. y tu base de " + baseIsosceles + " cm.";
            }
        }
        else {
            return "No son las medidas de un triángulo isósceles.";
        }
    }
    else {
        return "No son las medidas de un triángulo, verifique las medidas por favor."    
    }    
}

function calcularAlturaIsosceles () {
    const a = document.getElementById("ladoATrianguloIsosceles");
    const aValue= parseInt(a.value);
    const b = document.getElementById("ladoBTrianguloIsosceles");
    const bValue= parseInt(b.value);
    const c = document.getElementById("ladoCTrianguloIsosceles");
    const cValue= parseInt(c.value);

    altura = alturaIsosceles(aValue, bValue, cValue);
    resultado = document.getElementById("resultadoAltura");
    resultado.innerText = altura;
    return resultado.innerText;
}
