
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// 1 вариант
const allCategories = document.querySelectorAll (`ul#categories li.item`);
const numberOfCategories = allCategories.length;
console.log (`Number of categories: ${numberOfCategories}`);

for (let i=0; i < numberOfCategories; i+=1) {
    const headText = allCategories[i].firstElementChild.textContent;
    console.log (`Category: ${headText}`);

const elementsEl = allCategories[i].lastElementChild;
const numberOfElements = elementsEl.querySelectorAll(`li`);
console.log (`Elements: ${numberOfElements.length}`)
}

// 2 вариант

// const itemsRef = document.querySelectorAll('.item');

// console.log("Number of categories:", itemsRef.length);



// const titleRef = document.querySelectorAll("h2");

//     for(const text of titleRef){
//             console.log("\nCategory:",text.textContent);
//             console.log("Elements:",text.nextElementSibling.children.length);

//         }