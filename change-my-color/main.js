const rainbow = document.getElementById("change-color");
colors = ["red", "white"];
let colorIndex = 0;

rainbow.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
