//console.log("Hello world")


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const Price = document.getElementById("CuaPerArea");
    Price.innerText ="El perimetro es: " + perimetro;

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const Price = document.getElementById("CuaPerArea");
    Price.innerText = "El area es: " + area;
}



//Calculos triangulo
function calcularPerimetroTriangulo(){
    let inputlado1 = document.getElementById("inputLadoTriangulo");
    let lado1 = parseInt(inputlado1.value);
    let inputlado2 = document.getElementById("inputLado2Triangulo");
    let lado2 = parseInt(inputlado2.value);
    let inputbase = document.getElementById("inputBase3Triangulo");
    let base = parseInt(inputbase.value);
    const pTriangulo = perimetroTriangulo(lado1, lado2, base);
    const Price = document.getElementById("pTriangulo");
    Price.innerText = "El periemtro es: " + pTriangulo;
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo");
    const base = inputBase.value;
    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const altura = inputAltura.value;
    const aTriangulo = areaTriangulo(base, altura);
    const Price = document.getElementById("aTriangulo");
    Price.innerText = "El area es: " + aTriangulo;
    
}

//Calulos Circulo
function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radio = inputRadio.value;
    const diametro = diametroCirculo(radio);
    const Price = document.getElementById("dpaCirculo");
    Price.innerText = "El diametro es: " + diametro;
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radio = inputRadio.value;
    const PerimetroC = perimetroCirculo(radio);
    const Price = document.getElementById("dpaCirculo");
    Price.innerText = "El perimetro es: " + PerimetroC;
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radio = inputRadio.value;
    const AreaC = areaCirculo(radio);
    const Price = document.getElementById("dpaCirculo");
    Price.innerText = "El area es: " + AreaC; 
}
//Cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}
//Triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) /2;
}
//Circulo
function diametroCirculo(radio){
    return radio*2;
}
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

/*
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm cuadrados");
console.groupEnd();


console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo2 = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: "
+ ladoTriangulo1 + "cm "
+ ladoTriangulo2 + "cm "
+ baseTriangulo2 + "cm ");
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo2;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo2 * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm cuadrados");

console.groupEnd();

console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm")
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("El valor de PI es de :" + PI);
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es de: " + areaCirculo + "cm cuadrados")
console.groupEnd(); 

*/
