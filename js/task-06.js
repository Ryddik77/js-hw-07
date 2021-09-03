const validClassName = "valid";
const invalidClassName = "invalid";

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const isValid = event.target.value.length <= inputEl.dataset.length;
  const className = isValid ? validClassName : invalidClassName;
  inputEl.classList.remove(validClassName, invalidClassName);
  inputEl.classList.add(className);
});