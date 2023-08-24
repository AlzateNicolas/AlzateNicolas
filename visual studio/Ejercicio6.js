//Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de
//pizza, sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
//características (programa básico-simulación):
//a. Se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
//b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
//• Pizza a $7000 por unidad
//• Sándwich a $5000 unidad
//• Ensalada a $15000 unidad
//c. Se le pide al usuario si desea agregar salsa adicional que vale $500 pesos.
//d. El sistema indica el costo que paga el cliente por su pedido.

let producto = prompt("¿Qué producto quieres? (1. Pizza, 2. Sándwich, 3. Ensalada)");

if (producto === "1"){
    let porciones = prompt("¿Cuántos porciones quieres?");
    let costo = 7000 * porciones;
    console.log("El costo total es: " + costo);
} else if (producto === "2"){
    let porciones = prompt("¿Cuántos porciones quieres?");
    let costo = 5000 * porciones;
    console.log("El costo total es: " + costo);
} else if (producto === "3"){
    let porciones = prompt("¿Cuántos porciones quieres?");
    let costo = 15000 * porciones;
    console.log("El costo total es: " + costo);
}

let agregarSalsa = prompt("¿Desea agregar salsa? (1. Si, 2. No)");

if (agregarSalsa === "1"){
    let costo = costo + 500;
    console.log("El costo total es: " + costo);
} else if (agregarSalsa === "2"){

    console.log("El costo total es: " + costo);}

