const btnCreateEl = document.querySelector("button[data-action='render']");
const btnDestroyEl = document.querySelector("button[data-action='destroy']");
const divBoxEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

btnCreateEl.addEventListener("click", renderDivs);
btnDestroyEl.addEventListener("click", clearBoxes);

function renderDivs() {
  const countDivs = inputEl.value ? inputEl.value : 0;

  const divEls = createDivsEl(countDivs);

  clearBoxes();
  divBoxEl.append(...divEls);
}

function createDivsEl(countDivs) {
  let sizeDiv = 20;

  const resultDivs = [];

  for (let i = 0; i < countDivs; i++) {
    sizeDiv += 10;
    const divEl = generateDivEl(sizeDiv);
    resultDivs.push(divEl);
  }

  return resultDivs;
}

function generateDivEl(sizeDiv) {
  const divEl = document.createElement("div");
  divEl.style.width = `${sizeDiv}px`;
  divEl.style.height = `${sizeDiv}px`;
  divEl.style.backgroundColor = generateRgbStyle();

  return divEl;
}

function generateRgbStyle() {
  const generateColorValue = () => Math.floor(Math.random() * 255); // 0 - 255

  const r = generateColorValue();
  const g = generateColorValue();
  const b = generateColorValue();

  const rgbStyle = `rgb(${r}, ${g}, ${b})`;
  return rgbStyle;
}

function clearBoxes() {
  divBoxEl.innerHTML = "";
}