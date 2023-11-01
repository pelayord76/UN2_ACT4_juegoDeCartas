import Carta from "./carta.js"
import Baraja from "./baraja.js"

export default class Partida {

    constructor(filas, columnas) {
        if ((filas * columnas) % 2 !== 0) {
            console.error("El número de cartas del tablero debe ser par.");
        }
        this._filas = filas;
        this._columnas = columnas;
        this._baraja = new Baraja();
        this._cartasSeleccionadas = this.baraja();
        this._mazo = this.reparte();
        this._cartaVolteada = null;
        this._aciertos = 0;
        this._numeroIntentos = 0;
    }

    selecciona() {
        const devolver = [];
        for (let i = 0; i < this._filas; i++) {
            for (let j = 0; j < this._columnas; j++) {
                let cartaAñadir = this._baraja.generaCarta();
                devolver.push(cartaAñadir);
                devolver.push(cartaAñadir);
            }
        }
        return devolver;
    }

    baraja() {
        var devolver = this.selecciona();
        return devolver.sort(this.ordenRandom);
    }

    ordenRandom() {
        return 0.5 - Math.random();
    }

    reparte() {
        var devolver = new Array(this._filas);
        for (let i = 0; i < this._filas; i++) {
            devolver[i] = new Array(this._columnas);
        }
        var cartas = this._cartasSeleccionadas;
        for (let i = 0; i < this._filas; i++) {
            for (let j = 0; j < this._columnas; j++) {
                devolver[i][j] = cartas.shift();
            }
        }
        return devolver;
    }

    voltea(fila, columna) {
        this._cartaVolteada = new Carta(fila, columna);
        this._mazo[fila][columna] = null;
        this._intentos++;
    }

    compruebaAcierto(fila, columna) {
        if (this._cartaVolteada === this._mazo[fila][columna]) {
            this._aciertos++;
            this._mazo[fila][columna] = null;
            //falta poner la carta volteada a null
            return true;
        }
        else return false;
    }

    haFinalizado() {
        if (this._aciertos === ((this._filas * this._columnas) / 2)) return true;
        else return false;
    }

    isCartaEnMazo(carta) {
        return this._cartasSeleccionadas.includes(carta);
    }
}