function calculoDePuntajeEnCurso(correctas,incorrectas){

    let totalCorrectas;
    let totalIncorrectas;
    let resultadoFinal;

    if(incorrectas < 0){
        totalIncorrectas = 0;
        resultadoFinal = 0;
    }    

    if(incorrectas > 0){
        totalCorrectas = correctas * 10;
        totalIncorrectas = incorrectas * 2;
        resultadoFinal = totalCorrectas - totalIncorrectas;
        if(resultadoFinal < 0){
                resultadoFinal = 0;
        }
    }

    else if(incorrectas == 0 && correctas == 0){
        resultadoFinal = 0;
    }

    else{
        totalCorrectas = correctas * 10;
        resultadoFinal = totalCorrectas + 5;
    }

    
    
    return resultadoFinal;


}

module.exports = calculoDePuntajeEnCurso