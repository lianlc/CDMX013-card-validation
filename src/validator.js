function isValid(creditCardNumber) {
  var numeros = Number(creditCardNumber); //pasar el valor a tipo numero
  var datos = Array.from(String(creditCardNumber, numeros)); //pasar los valores a un array
  //console.log(datos)
  const ArrayValor = [];

  datos.forEach(function (numero, index) {
    if (index % 2 === 0) {
      //iterar el array para obtener los valores par del arreglo
      //dividir el indice entre 2 para obtener las posiciones par
      if ((numero *= 2) > 9) {
        //multiplicar por 2 los valores pares**
        numero -= 9;
      } //a los valores mayor a 9 restar 9**
      ArrayValor.push(numero);
    } else {
      ArrayValor.push(numero);
    }
  });
  //console.log(ArrayValor);

  //sumar los valores impares y los nuevos valores par**
  var sum = ArrayValor,
    suma = 0;
  sum.forEach(function (numero) {
    suma += Number(numero);
  });
  //console.log(suma);

  if (suma % 10 == 0) {
    return true;
    //console.log ("valido")
  } else {
    return false;
    //console.log("invalido")
  }
}

function maskify(creditCardNumber) {
  const ultmos = creditCardNumber.substr(creditCardNumber.length - 4); //le indicamos a la variable ultmos que sera igual al valor de cardNum y solo sean los ultimos 4
  //Se invocala la funcion para incertar los elementos
  return ultmos;
}

//Variable que accede a traves del querySelector al unico form que tengo

//definicion de variables para obtener los ultimos 4 digitos        |

/*;//con esto  estamos indicando que no ejecute lo que haria elevento (e) por defecto hasta que hagamos submit
  
  console.log(cardNum); */

// division 10 pra validar
//si el resutado termina en 0 es vardadero**

export default {
  isValid,
  maskify,
};
