const container = document.querySelector("#container");

const buttn = document.querySelector("#inputBtn");

buttn.addEventListener("click", function () {
  container.innerHTML = "";
  let input = prompt("Please enter a grid size", "100");
  if (input <= 0) input = 1;
  if (input > 100) input = 100;
  createGrid(input);
});

function createGrid(input) {
  let gridSize = Math.floor(900 / input);
  for (let i = 0; i < input * input; i++) {
    let rainbowColor = ((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, "0");
    const square = document.createElement("div");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "blue";
    });
    square.classList.add("box");
    square.style.width = gridSize - 2 + "px";
    square.style.height = gridSize - 2 + "px";
    document.getElementById("container").appendChild(square);
  }
}
