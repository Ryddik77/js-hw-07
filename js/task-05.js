const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const noName = spanEl.innerText;

inputEl.addEventListener("input", (event) => {
  if (event.target.value) {
    spanEl.innerText = event.target.value;
  } else {
    spanEl.innerText = noName;
  }
});
