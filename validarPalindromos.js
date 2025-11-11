function validarPalindromos(texto){
    
    let cantidadCaracteres = texto.length;
    let textoinvertido = new Array(cantidadCaracteres);
    let confirmarPalindromo = false;
    let invertido;

    texto = texto.toLowerCase();

    if (texto==""){
        return confirmarPalindromo = true;
    }

    for (let i = cantidadCaracteres - 1; i >= 0; i--) {
            textoinvertido[cantidadCaracteres - 1 - i] = texto.charAt(i);
        }

    
    invertido = textoinvertido.join("");

    if(invertido == texto){
        confirmarPalindromo = true;
    }

    return confirmarPalindromo;

}

module.exports = validarPalindromos;