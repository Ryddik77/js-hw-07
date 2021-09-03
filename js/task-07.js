const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = `${event.target.value}px`; 
});