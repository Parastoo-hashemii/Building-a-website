document.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector("#email");
  const number = document.querySelector("#number");

  document.querySelector(".email-input").addEventListener("click", (e) => {
    e.preventDefault();
    number.classList.add("hidden");
    email.classList.remove("hidden");
  });

  document.querySelector("number-input").addEventListener("click", (e) => {
    e.preventDefault();
    email.classList.remove("hidden");
    number.classList.add("hidden");
  });
});
