let counterValue = 0;
const counterValueView = document.getElementById("value");

const onClick = (event) => {
    const action = event.currentTarget.dataset.action;

    switch (action) {
        case "increment":
            counterValue += 1;
            break;
        case "decrement":
            counterValue -= 1;
            break;
        default:
    }

    counterValueView.textContent = counterValue;
}

document.querySelectorAll("button[data-action]").forEach((element) => {
    element.addEventListener("click", onClick);
});
