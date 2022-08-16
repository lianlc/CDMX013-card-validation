import validator from "./validator.js";
//comentario corto
/* comentario largo*/
const numeroDeTarjeta = document.querySelector("#numcard");

const $form = document.querySelector("form");
$form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("#card").innerHTML = validator.maskify(
    numeroDeTarjeta.value
  );
  const valid = validator.isValid(numeroDeTarjeta.value); //se trae del html  el valor de card, para sustituirlo por el valor de la variable cardnum
  $form.reset();
  if (valid === true) {
    const success_message = document.querySelector("#success_message");
    success_message.classList.add("active");

    //success_message.classList.remove("active");
  } else {
    const error_message = document.querySelector("#error_message");
    error_message.classList.add("active");
  }
});

let aceptarValid = document.getElementById("aceptarUno");
aceptarValid.addEventListener("click", function () {
  location.reload();

  //const sectionCompra = document.getElementById("#seccionCompra");
  //sectionCompra.classList.add("active");
});

let aceptarInvalid = document.getElementById("aceptarDos");
aceptarInvalid.addEventListener("click", function () {
  location.reload();
});
