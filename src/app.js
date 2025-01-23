/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        console.log(pronoun[i] + adj[a] + noun[b] + ".com");
      }
    }
  }

  // let array1 = ["gato", "perro", "conejo", "caballo"];
  // for (let i = 0; i < array1.length; i++) {
  //   // (i = i+1 eso significa i++) variable i inicia en 0; i es menor al largo del array1; y luego agrega 1 mas a i
  //   console.log(i, array1[i], array1.length);
  // }
};
