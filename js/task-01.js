const listOfCategories = document.getElementById("categories");
const categoriesListItems = categories.children;

console.log(`Number of categories: ${categoriesListItems.length}`);

for (const categoryListItem of categoriesListItems) {
    const categoryHeading = categoryListItem.firstElementChild;
    const categoryElements = categoryHeading.nextElementSibling.children;

    console.log(`Category: ${categoryHeading.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
}