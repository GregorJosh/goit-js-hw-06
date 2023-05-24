const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUL = document.getElementById("ingredients");
let ulInnerHTML = "";

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");

  li.textContent = ingredient;
  li.classList.add("item");

  /*
  # Wolałbym użyć tego fragmentu kodu ale w zadaniu 
  # OBOWIĄZKOWO trzeba użyć metody 'createElement'.

  ulInnerHTML += `
    <li class="item">${ingredient}</li>
  `;
  */

  ulInnerHTML += li.outerHTML;
});

/*
# W zadaniu trzeba w jednej operacji dołaczyć 
# wszystkie elementy LI na raz do ul#ingredients.
*/

ingredientsUL.insertAdjacentHTML("afterbegin", ulInnerHTML);
