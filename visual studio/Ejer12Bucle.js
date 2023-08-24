//Este programa en JavaScript simula resultados de la Champions League. Permite al usuario ingresar los nombres
//y los marcadores de los equipos en tres fechas particulares de la competición, y luego muestra un ranking de
//equipos basado en sus resultados.
//Características del Programa:
//• El programa permite al usuario ingresar los nombres y los marcadores de tres equipos en tres fechas
//particulares.
//• El programa calcula los puntos obtenidos por cada equipo en base a sus resultados.
//• Victoria: 3 puntos.
//• Empate: 1 punto.
//• Derrota: 0 puntos.
//• El programa muestra un ranking de equipos ordenados por la cantidad de puntos obtenidos.
//• Al final del proceso, el programa muestra el ranking de equipos y sus puntos.

let equipos = [
    { nombre: "Real Madrid", puntos: 0 },
    { nombre: "Bayern Munich", puntos: 0 },
    { nombre: "Barcelona", puntos: 0 }
];

function calcularPuntos(resultado) {
    if (resultado === "victoria") {
        return 3;
    } else if (resultado === "empate") {
        return 1;
    } else {
        return 0;
    }
}

let fecha = 1;
while (fecha <= 3) {
    console.log("Fecha " + fecha + ":");

    let equipo = 0;
    while (equipo < equipos.length) {
        let marcadorEquipo = parseInt(prompt("Ingrese el marcador del equipo " + equipos[equipo].nombre + " en la fecha " + fecha + ":"));

        equipos[equipo].puntos += calcularPuntos(prompt("Resultado del equipo " + equipos[equipo].nombre + " en la fecha " + fecha + " (victoria/empate/derrota):").toLowerCase());

        equipo++;
    }

    fecha++;
}

equipos.sort((a, b) => b.puntos - a.puntos);

console.log("Ranking de equipos:");
let i = 0;
while (i < equipos.length) {
    console.log(equipos[i].nombre + ": " + equipos[i].puntos + " puntos");
    i++;
}
