const calculoDePuntajeEnCurso = require('./calculoDePuntajeEnCurso')

test('1.	Jugador con 3 correctas y 2 incorrectas, 26 puntos ',()=>{

    expect(calculoDePuntajeEnCurso(3,2)).toBe(26);


})

test('2.	Jugador con todas correctas → bonus aplicado.',()=>{

    expect(calculoDePuntajeEnCurso(3,0)).toBe(35);


})  

test('3.	Jugador con todas incorrectas → nunca menor que 0.',()=>{

    expect(calculoDePuntajeEnCurso(0,3)).toBe(0);


})  

test('4.	Jugador sin respuestas → puntaje 0.',()=>{

    expect(calculoDePuntajeEnCurso(0,0)).toBe(0);


})  

test('5.	Caso borde: 1 correcta y nada más.',()=>{

    expect(calculoDePuntajeEnCurso(1,2)).toBe(6);


})  