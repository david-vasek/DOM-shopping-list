'use strict';

console.log('Script Loaded');

const createList = document.querySelector('#createList'),
  myList = document.querySelector('#myList'),
  inputList = document.querySelectorAll('input');




function createListFromInput(list) {
  const listElement = document.createElement('ul');

  list.forEach(function(input) {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    listElement.appendChild(listItem);
  });
  return listElement;
}





createList.addEventListener('click', function() {
  const groceryList = createListFromInput(inputList);
  myList.append(groceryList);
});