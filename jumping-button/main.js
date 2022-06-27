function moveIt() {
  let button = document.getElementById("flip-flop");

  if (button.classList.contains("float-right")) {
    button.classList.remove("float-right");
  } else button.classList.add("float-right");
}
