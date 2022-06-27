const button = document.querySelector("#count");

button.addEventListener("click", (event) => {
  button.textContent = `${event.detail}`;
});
