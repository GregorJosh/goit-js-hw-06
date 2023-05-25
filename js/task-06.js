const textInputElement = document.getElementById("validation-input");

const onBlur = (event) => {
  const inputElement = event.currentTarget;

  if (inputElement.classList.contains("invalid")) {
    inputElement.classList.remove("invalid");
  }

  if (inputElement.classList.contains("valid")) {
    inputElement.classList.remove("valid");
  }

  inputElement.value.length != inputElement.dataset.length
    ? inputElement.classList.add("invalid")
    : inputElement.classList.add("valid");
};

textInputElement.addEventListener("blur", onBlur);
