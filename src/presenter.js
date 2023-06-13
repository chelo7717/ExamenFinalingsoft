import ocurrencias from "./sumador";

const first = document.querySelector("#primeraPabra");
const second = document.querySelector("#segundaPalabra");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;
  const secondNumber =second.value;

  div.innerHTML = "<p>" + ocurrencias(firstNumber, secondNumber) + "</p>";
});
