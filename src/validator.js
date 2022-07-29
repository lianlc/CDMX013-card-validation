const validator = {
  // ...
};
//Variable que accede a traves del querySelector al unico form que tengo
const $form = document.querySelector("form");
//Definicion de la variable para el numero de tarjeta 
let cardNum;
//definicion de variables para obtener los ultimos 4 digitos        |
let ultmos;


function updateCard() {//Funcion que agarega el valor  de la tarjeta 
  document.querySelector("#card").innerHTML = ultmos;//se trae del html  el valor de card, para sustituirlo por el valor de la variable cardnum
}

$form.addEventListener("submit", function (e) {//atravez de un escuchador (addEventListener) se ejecutara la funcion anterior
  e.preventDefault();//con esto  estamos indicando que no ejecute lo que haria elevento (e) por defecto hasta que hagamos submit
  cardNum = $form[0].value;//se le asigna el valor a la variable cardNum, que sera igual al valor del form 
  ultmos = cardNum.substr(cardNum.length-4);//le indicamos a la variable ultmos que sera igual al valor de cardNum y solo sean los ultimos 4
  updateCard();//Se invocala la funcion para incertar los elementos
  $form.reset()
  console.log(cardNum); 


  
  var  numeros = num => Number(num)//pasar el valor a tipo numero
var datos= Array.from(String(cardNum),numeros);//pasar los valores a un array

console.log(datos)
 const ArrayValor=[]
datos.forEach(function(numero, index){//iterar el array para obtener los valores par del arreglo
  if(index%2=== 0){//dividir el indice entre 2 para obtener las posiciones par
    if((numero*=2)>9)//multiplicar por 2 los valores pares**
    {numero  -=9 }//a los valores mayor a 9 restar 9**  
    ArrayValor.push(numero)
  }
  else { ArrayValor.push(numero)
    }
}) 
console.log(ArrayValor)

//sumar los valores impares y los nuevos valores par**
var sum = ArrayValor , suma = 0;
    sum.forEach( function(numero){
        suma += numero;
        //return sum[sum.length -1]==='0'? true : false
    });
    console.log(suma);

 


});
  

//si el resutado termina en 0 es vardadero**
// division 10 pra validar 







export default validator;
