import Carta from "./carta.js"

export default class Baraja {

    constructor() {
        this._baraja = new Array(4);
        this.incializarBaraja();
    }

    get baraja() {
        return this._baraja;
    }

    incializarBaraja() {
        const palos = ["PICAS", "CORAZONES", "TRÉBOLES", "DIAMANTES"];
        const nombres = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

        for (let i = 0; i < palos.length; i++) {
            this._baraja[i] = new Array(12);

            for (let j = 0; j < nombres.length; j++) {

                this._baraja[i][j] = new Carta(palos[i], nombres[j]).toString();
            }
        }
    }

    generaCarta() {
        let i = Math.floor(Math.random() * 4);
        let j = Math.floor(Math.random() * 12);

        return this._baraja[i][j];
    }
}