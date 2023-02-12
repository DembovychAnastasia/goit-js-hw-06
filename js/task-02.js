const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// знаходимо список 
const container = document.querySelector("#ingredients"); 
const arrayItem = [];
// створюємо елемент списку
ingredients.forEach((ingredientItem) => {
  const liEl = document.createElement('li')
  liEl.textContent = ingredientItem
  liEl.classList.add('item')
  arrayItem.push(liEl)
 
})
 container.append(...arrayItem)



