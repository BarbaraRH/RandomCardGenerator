/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  const randomItem = array => array[Math.floor(Math.random() * array.length)];

  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "K",
    "Q"
  ];
  const symbols = [
    ["&#9824", "text-dark"],
    ["&#9827", "text-dark"],
    ["&#9829", "text-danger"],
    ["&#9830", "text-danger"]
  ];

  let randomNumber = randomItem(numbers);
  let randomSymbol = randomItem(symbols);

  card.innerHTML = `
    <div class="card border-success mb-3" style="width: 15rem; height: 23rem">
        <div class="card-header border-0 bg-transparent ${randomSymbol[1]}">
            <h1 class="display-3">${randomSymbol[0]}</h1>
        </div>
        <div class="card-body text-center">
            <h1 class="card-title display-3">${randomNumber}</h1>
        </div>
        <div class="card-footer border-0 bg-transparent ${randomSymbol[1]}">
            <h1 class="display-3">${randomSymbol[0]}</h1>
        </div>
    </div>
`;
};
