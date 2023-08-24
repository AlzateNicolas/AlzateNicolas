//El objetivo de este programa es imprimir en la consola la tabla de multiplicar de un número dado por el usuario.
//El programa solicitará al usuario ingresar un número y luego generará y mostrará la tabla de multiplicar
//correspondiente en la consola.
//Requisitos
//El programa debe cumplir con los siguientes requisitos:
//• Solicitar al usuario ingresar un número entero para la tabla de multiplicar.
//• Generar la tabla de multiplicar para el número ingresado, multiplicando el número por los
//enteros del 1 al 10.
//• Imprimir cada multiplicación en la consola en el formato "número x multiplicador = resultado".

let numero = parseInt(prompt("Ingrese un número para generar la tabla de multiplicar:"));

console.log("Tabla de multiplicar del " + numero + ":");

let multiplicador = 1;
while (multiplicador <= 10) {
    let resultado = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + resultado);
    multiplicador++;
}
