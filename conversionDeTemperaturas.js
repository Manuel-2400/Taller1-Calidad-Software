function conversionDeTemperaturas(celsiusString) {

    let celsius = parseFloat(celsiusString.replace("°C", ""));
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    return fahrenheit + "°F";
}

module.exports = conversionDeTemperaturas;