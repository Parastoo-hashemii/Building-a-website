function setFormMassage(formElement, type, message) {
  const massageElement = formElement.querySelector(".form--message");
  massageElement.textContent = message;
  massageElement.classList.remove(
    "form--message--success",
    "form--message--error"
  );
  massageElement.classList.add(`form--message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form--message--error");
  inputElement.parentElement.querySelector(
    ".form--input-error-massage"
  ).textContent = message;
}

function clearError(inputElement) {
  inputElement.classList.remove("form--input--error");
  inputElement.parentElement.querySelector(
    ".form--input-error-massage"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkcreatAcount").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // perform your AJAXFetch login
    setFormMassage(
      loginForm,
      "error",
      "invalide username / password combination"
    );
  });
  document.querySelectorAll(".form--input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "username must be at 10 characters in length"
        );
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearError(inputElement);
    });
  });
});

let user = {
  username: "parastoo",
  password: "12345",
};
function validation() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === user.username && password === user.password) {
    window.open("./index.html");
    // alert("that is ok");
  } else {
    alert("you don't have accont");
  }
}
validation();
