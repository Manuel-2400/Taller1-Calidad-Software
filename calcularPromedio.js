function calcularPromedio(notas) {
    
    let suma = 0;

    if (!Array.isArray(notas) || notas.length === 0) {
        return 0;
    }

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    let promedio = suma / notas.length;
    return promedio;
}

module.exports = calcularPromedio;
