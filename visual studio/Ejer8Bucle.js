//Este programa en JavaScript permite al usuario ingresar las longitudes de los tres lados de un triángulo y
//determinar si el triángulo es equilátero o no.

//Características del Programa:
//• El programa solicita al usuario ingresar la longitud de los tres lados del triángulo.
//• El programa verifica si los tres lados tienen la misma longitud.
//• Si los tres lados son iguales, el programa informa al usuario que el triángulo es equilátero.
//• Si al menos un par de lados tienen longitudes diferentes, el programa informa al usuario que el
//triángulo no es equilátero.

//Flujo del Programa:
//Solicitar al usuario la longitud del primer lado del triángulo y almacenar en una variable.
//Solicitar al usuario la longitud del segundo lado del triángulo y almacenar en una variable.
//Solicitar al usuario la longitud del tercer lado del triángulo y almacenar en una variable.
//Verificar si las tres longitudes son iguales:
//Si todas son iguales, mostrar el mensaje "El triángulo es equilátero".
//Si al menos un par de lados tiene longitudes diferentes, mostrar el mensaje "El triángulo no es
//equilátero".

// Solicitar al usuario la longitud del primer lado del triángulo y almacenar en una variable.
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));

// Solicitar al usuario la longitud del segundo lado del triángulo y almacenar en una variable.
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));

// Solicitar al usuario la longitud del tercer lado del triángulo y almacenar en una variable.
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));

// Verificar si las tres longitudes son iguales.
if (lado1 === lado2 && lado2 === lado3) {
    // Si todas son iguales, mostrar el mensaje "El triángulo es equilátero".
    console.log("El triángulo es equilátero");
} else {
    // Si al menos un par de lados tiene longitudes diferentes, mostrar el mensaje "El triángulo no es equilátero".
    console.log("El triángulo no es equilátero");
}
