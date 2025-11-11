function contarVocales(texto) {

    let cadena = texto.toLowerCase();
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena.charAt(i);

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador = contador + 1;
        }
    }

    return contador;
}

module.exports = contarVocales;
