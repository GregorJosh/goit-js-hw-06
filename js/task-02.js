const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsULElement = document.getElementById("ingredients");
const ingredientsLIElements = [];

ingredients.forEach((ingredient) => {
  const ingredientLIElement = document.createElement("li");

  ingredientLIElement.textContent = ingredient;
  ingredientLIElement.classList.add("item");

  ingredientsLIElements.push(ingredientLIElement);
});

ingredientsULElement.append(...ingredientsLIElements);
