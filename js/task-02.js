// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.


const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  
  const ingredientsRef = document.querySelector("#ingredients");
const justAnArr = ingredients.map(ingredient =>{
  const productItem = document.createElement("li");
  productItem.classList.add("item");
  productItem.textContent = ingredient;
  //console.log(productItem);
  return productItem;
});

ingredientsRef.append(...justAnArr);

  