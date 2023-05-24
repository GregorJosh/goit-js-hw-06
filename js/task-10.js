function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const containerElement = document.getElementById("boxes");
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBoxDivHTML = `
      <div 
        class="box" 
        id="box-${i + 1}" 
        style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};">
      </div>
    `;

    containerElement.insertAdjacentHTML("beforeend", newBoxDivHTML);

    width += 10;
    height += 10;
  }
}

const onCreateBtnClick = (event) => {
  createBoxes(document.querySelector("#controls input").value);
};

const onDestroyBtnClick = () => {
  document.getElementById("boxes").innerHTML = "";
};

document
  .querySelector("button[data-create]")
  .addEventListener("click", onCreateBtnClick);
document
  .querySelector("button[data-destroy]")
  .addEventListener("click", onDestroyBtnClick);
