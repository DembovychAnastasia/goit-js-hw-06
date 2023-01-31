
// знаходимо кількість категорій
const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

//знаходимо заголовок 
categories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})
