//“Lavanservis” es un servicio de limpieza en el que los clientes envían sus prendas para que se preste el servicio
//de lavado y planchado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
//(programa básico-simulación):
//a. El cliente escoge entre dos servicios: lavado o planchado.
//b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
//c. Se solicita la cantidad de prendas.
//d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
//• Lavado en seco: 4000 por prenda
//• Lavado normal: 3000 por prenda
//• Planchado: 2000 por prenda
//e. Adicional se cobra un domicilio de 4000 solo si es planchado; para otros servicios es gratis.

let servicio = prompt("¿Qué servicio de limpieza quieres? (1. Lavado, 2. Planchado)");

if (servicio === "1"){
    let lavado = prompt("¿Qué tipo de lavado quieres? (1. Seco, 2. Normal)");
    if (lavado === "1"){
        let prendas = prompt("¿Cuántos prendas quieres?");
        let costo = 4000 * prendas;
        if (servicio === "1"){
        }
        console.log("El costo total es: " + costo);
    } else if (lavado === "2"){
        let prendas = prompt("¿Cuántos prendas quieres?");
        let costo = 3000 * prendas;
        if (servicio === "1"){
        }
        console.log("El costo total es: " + costo);
    }
    
} else if (servicio === "2"){
    let prendas = prompt("¿Cuántos prendas quieres?");
    let costo = 2000 * prendas;
    if (servicio === "1"){
        costo = costo + 4000;
    }
    console.log("El costo total es: " + costo);
}