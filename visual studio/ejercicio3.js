
let costoApartamento = parseFloat(prompt("Hola, bienvenido. Ingresa por favor el valor del apartamento:"));
let opcion;
let tipoInmueble;

while (true) {
  opcion = prompt("Elige una opción:\n1. Usado\n2. Nuevo");
  tipoInmueble = parseInt(opcion);

  if (tipoInmueble === 1 || tipoInmueble === 2) {
    break; 
  } else {
    console.log("La opción seleccionada no es válida. Elige 1 o 2.");
  }
}

let comisionInmobiliaria;
if (tipoInmueble === 1) {
    comisionInmobiliaria = costoApartamento * 0.1;
} else if (tipoInmueble === 2) {
    comisionInmobiliaria = costoApartamento * 0.2;
}

let valorPropietario = costoApartamento - comisionInmobiliaria;
let valorInmobiliaria = comisionInmobiliaria;

console.log(`La comisión de la inmobiliaria es: ${valorInmobiliaria}`);
console.log(`El valor que recibe el propietario es: ${valorPropietario}`);

console.log();("¡Muchas gracias, hasta luego!");