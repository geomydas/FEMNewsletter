const part1 = document.querySelector("#part1");
const part2 = document.querySelector("#part2");
const form = document.querySelector("#form");
const inputEmail = document.querySelector("#email");
const confirmationEmail = document.querySelector("#confirmation-email");
const buttonSubmit = document.querySelector("#submit");
const buttonDismiss = document.querySelector("#dismiss");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inputEmail.validity.valid) {
    part1.classList.toggle("hidden");
    part1.classList.toggle("md:grid");
    part2.classList.toggle("hidden");
    part2.classList.toggle("flex");
  }

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  confirmationEmail.textContent = data.email;
});

buttonDismiss.addEventListener("click", function () {
  part1.classList.toggle("hidden");
  part1.classList.toggle("md:grid");
  part2.classList.toggle("hidden");
  part2.classList.toggle("flex");
});
