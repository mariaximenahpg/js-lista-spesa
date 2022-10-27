"use strict";
// Lista della spesa:
const groceryList = ['Pizza', 'Pane', 'Pasta', 'Latte senza lattosio', 'Cioccolata fondente'];

// Container lista della spesa:
const listContainer = document.getElementById('grocery-list');

// Ciclo while:
let i = 0;

while ( i <groceryList.length ) {
    console.log(groceryList[i]);
    const listItem = document.createElement("li");
    listItem.innerHTML = groceryList[i];
    listContainer.append(listItem);
    i++;
}