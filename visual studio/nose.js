
let marca = prompt("Ingrese una marca de carro válida (Chevrolet, Mazda, Renault): ").toLowerCase();

let referencia;

switch (marca) {
    case "chevrolet":
        referencia = prompt("Seleccione la referencia (Captiva o Tracker):");
        break;
    case "mazda":
        referencia = prompt("Seleccione la referencia (Modelo A o Modelo B):");
        break;
    case "renault":
        referencia = prompt("Seleccione la referencia (Referencia X o Referencia Y):");
        break;
    default:
        console.log("Marca de carro inválida. Ingrese otra.");
        break;
}

if (referencia) {
    switch (referencia.toLowerCase()) { 
        case "captiva":
            console.log("Hay 8 referencias disponibles, de color negro y blanco.");
            break;
        case "tracker":
            console.log("Hay 5 referencias disponibles, con un valor de 35 millones de pesos cada una.");
            break;
        case "modelo a":
            console.log("Hay 2 referencias disponibles en color rojo.");
            break;
        case "modelo b":
            console.log("Hay 7 referencias disponibles de color azul y negro.");
            break;
        case "referencia x":
            console.log("Hay 3 referencias disponibles, con un valor de 30 millones de pesos cada una.");
            break;
        case "referencia y":
            console.log("No hay referencias en este modelo por el momento.");
            break;
        default:
            console.log("Referencia inválida.");
            break;
    }
} else {
    console.log("No se ha seleccionado una referencia válida.");
}
