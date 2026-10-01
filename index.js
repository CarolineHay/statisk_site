"use strict"

console.log("Hello, World!");

const productUrl = "https://kea-alt-del.dk/t7/api/categories";
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
    data.forEach(categorie => {
        console.log(categorie, categorie);
        
    });
}