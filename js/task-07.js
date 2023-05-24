const fontSizeRangeInputElement = document.getElementById("font-size-control");
const textSpanElement = document.getElementById("text");

const onRangeInput = (event) => {
    textSpanElement.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeRangeInputElement.addEventListener("input", onRangeInput);
