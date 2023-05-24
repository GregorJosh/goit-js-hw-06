const nameInputElement = document.getElementById("name-input");
const nameSpanElement = document.getElementById("name-output");

const onNameInput = (event) => {
  const input = event.currentTarget;

  nameSpanElement.textContent = input.value ? input.value : "Anonymous";
};

nameInputElement.addEventListener("input", onNameInput);
