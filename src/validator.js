function isValid(creditCardNumber) {
  var numeros = Number(creditCardNumber); //pasar el valor a tipo numero
  var datos = Array.from(String(creditCardNumber, numeros)); //pasar los valores a un array
  //console.log(datos)
  const ArrayValor = [];

  datos.forEach(function (numero, index) {
    if (index % 2 != 0) {
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
console.log(suma);

  if (suma % 10 == 0) {
    return true;
    //console.log ("valido")
  } else {
    return false;
    //console.log("invalido")
  }
}

function maskify(creditCardNumber) {
 //const ultmos = creditCardNumber.substr(creditCardNumber.length - 4); //le indicamos a la variable ultmos que sera igual al valor de cardNum y solo sean los ultimos 4
  //Se invocala la funcion para incertar los elementos
  //return ultmos;
  if (creditCardNumber.length < 6) return creditCardNumber;
const last = creditCardNumber.substr(-4);
 console.log(last)
 const maski = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/[A-Za-z0-9_]/g, '#');
 console.log(maski+last)
  return (maski+last);
}

export default {
  isValid,
  maskify,
};
