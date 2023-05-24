function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorCodeViewSpanElement = document.querySelector(".color");
const changeColorButtonElement = document.querySelector(".change-color");

const onChangeColorBtnClick = (event) => {
  const colorCode = getRandomHexColor();

  document.body.style.backgroundColor = colorCode;
  colorCodeViewSpanElement.textContent = colorCode;
};

changeColorButtonElement.addEventListener("click", onChangeColorBtnClick);
