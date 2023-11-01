import Partida from "./partida.js";

var filas = prompt("Selecciona la cantidad de filas que quieres que tenga tu tablero:");
var columnas = prompt("Selecciona la cantidad de columnas que quieres que tenga tu tablero:");
var partida = new Partida(filas, columnas);

while (!partida.haFinalizado()) {
    pedirCartas();
}

function pedirCartas() {

    if (partida.haFinalizado()) console.log("PARTIDA FINALIZADA!!");

    var carta1 = prompt("Ingresa la posición de la primera carta (fila-columna):");
    var lista1 = carta1.split("-");
    var fila1 = parseInt(lista1[0]);
    var columna1 = parseInt(lista1[1]);

    partida.voltea(fila1, columna1);
    mostrarTabla();

    var carta2 = prompt("Ingresa la posición de la segunda carta (fila-columna):");
    var lista2 = carta2.split("-");
    var fila2 = parseInt(lista2[0]);
    var columna2 = parseInt(lista2[1]);

    partida.compruebaAcierto(fila2, columna2);

    setTimeout(pedirCartas(), 5000)
}

function mostrarTabla() {
    var codigoHTML = "<table border=1>";
    for (var i = 0; i < partida._mazo.length; i++) {
        codigoHTML += "<tr>";
        for (var j = 0; j < partida._mazo[i].length; j++) {
            if (partida._mazo[i][j] == null)
                codigoHTML += "<td></td>";
            else
                codigoHTML += "<td><br>" + partida._mazo[i][j] + "<br></td>";
        }
        codigoHTML += "</tr>";
    }
    codigoHTML += "</table>";
    document.getElementById("mazo").innerHTML = codigoHTML;
}