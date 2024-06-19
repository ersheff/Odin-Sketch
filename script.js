const etchContainer = document.querySelector("#etch-container");

etchContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("etch-square")) {
    const currentOpacity = parseFloat(e.target.style.opacity) || 0;
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity + 0.1;
    }
  }
});

document.querySelector("#new-grid-button").addEventListener("click", drawGrid);

drawGrid();

//

function getSquaresPerSide() {
  let squaresPerSide = parseInt(
    prompt("Enter the desired number of squares per side (between 2 and 100).")
  );
  while (!squaresPerSide || squaresPerSide < 2 || squaresPerSide > 100) {
    squaresPerSide = parseInt(
      prompt("Invalid input: please enter a number between 2 and 100.")
    );
  }
  return squaresPerSide;
}

function fillEtchContainer(squaresPerSide) {
  etchContainer.innerHTML = "";
  const widthCalc = 100 / squaresPerSide;
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("etch-square");
    square.style.setProperty("width", `${widthCalc}%`);
    etchContainer.appendChild(square);
  }
}

function drawGrid() {
  const squaresPerSide = getSquaresPerSide();
  fillEtchContainer(squaresPerSide);
}
