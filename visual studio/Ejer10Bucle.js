//Descripción: Este programa en JavaScript simula la evaluación de un examen de conocimientos. Se presentan 5
//preguntas y se evalúan las respuestas proporcionadas por el usuario. Cada respuesta correcta suma 10 puntos, y
//al final se muestran los resultados del examen.
//Características del Programa:
//• El programa presenta 5 preguntas al usuario.
//• Las preguntas pueden ser de selección múltiple o verdadero/falso.
//• El programa evalúa cada respuesta proporcionada por el usuario y calcula los puntos obtenidos.
//• Cada respuesta correcta suma 10 puntos.
//• Al final del examen, el programa muestra los resultados, indicando la cantidad de respuestas correctas y los
//puntos totales obtenidos.

//Flujo del Programa:
//• Inicializar una variable para el puntaje total con valor cero.
//• Repetir 5 veces:
//• Presentar la pregunta al usuario.
//• Leer la respuesta proporcionada por el usuario.
//• Evaluar si la respuesta es correcta:
//• Si es correcta, sumar 10 puntos al puntaje total.
//• Mostrar al usuario los resultados del examen:
//• Cantidad de respuestas correctas.
//• Puntaje total obtenido.

let puntajeTotal = 0;
let contador = 1; 

function evaluarPregunta(pregunta, respuestaCorrecta) {
    console.log(pregunta);
    let respuestaUsuario = prompt("Ingrese su respuesta (Escriba 'V' para Verdadero o 'F' para Falso):").toUpperCase();
    
    if (respuestaUsuario === respuestaCorrecta) {
        puntajeTotal += 10;
        console.log("Respuesta correcta. ¡Sumas 10 puntos!");
    } else {
        console.log("Respuesta incorrecta.");
    }
}

while (contador <= 5) { 
    console.log("Pregunta " + contador + ":");
    
    switch (contador) {
        case 1:
            evaluarPregunta("¿Colombia es una ciudad de América Latina? (V/F)", "F");
            break;
        case 2:
            evaluarPregunta("¿La capital de Francia es Madrid? (V/F)", "F");
            break;
        case 3:
            evaluarPregunta("¿El agua hierve a 100 grados Celsius? (V/F)", "V");
            break;
        case 4:
            evaluarPregunta("¿El símbolo químico del oxígeno es O2? (V/F)", "F");
            break;
        case 5:
            evaluarPregunta("¿La letra `a` es la primera letra del abecedario? (V/F)", "V");
            break;
        default:
            break;
    }
    
    contador++;
}

console.log("Examen completado.");
console.log("Cantidad de respuestas correctas: " + (puntajeTotal / 10));
console.log("Puntaje total obtenido: " + puntajeTotal + " puntos.");
