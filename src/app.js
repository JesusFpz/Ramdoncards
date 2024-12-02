/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let word = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function Aleatorio() {
    let index = Math.floor(Math.random() * word.length);
    let number = word[index];
    return number;
  }

  let cartaAleatoria = Aleatorio();
  document.getElementById("letra").innerHTML = cartaAleatoria;

  let icons = ["♦", "♥", "♠", "♣"];
  function iconsRandom() {
    let ind = Math.floor(Math.random() * icons.length);
    let icon = icons[ind];
    return icon;
  }
  function actualizarCarta() {
    let cartaAleatoria = Aleatorio();
    let simboloAleatorio = iconsRandom();

    document.getElementById("letra").innerHTML = cartaAleatoria;
    document.getElementById("iconos").innerHTML = simboloAleatorio;
    document.getElementById("iconofoot").innerHTML = simboloAleatorio;

    let color = "black";
    if (simboloAleatorio === "♦" || simboloAleatorio === "♥") {
      color = "red";
    }
    document.getElementById("letra").style.color = color;
    document.getElementById("iconos").style.color = color;
    document.getElementById("iconofoot").style.color = color;

    console.log("Carta aleatoria");
  }

  document.getElementById("boton").onclick = function() {
    actualizarCarta();
  };
};
