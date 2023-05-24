const loginFormElement = document.querySelector(".login-form");

const onSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    window.alert("Błąd! Powinny być wypełnione wszystkie pola formularza!");
  } else {
    const loginData = {};

    loginData[email.name] = email.value;
    loginData[password.name] = password.value;

    console.log(loginData);

    event.currentTarget.reset();
  }
};

loginFormElement.addEventListener("submit", onSubmit);
