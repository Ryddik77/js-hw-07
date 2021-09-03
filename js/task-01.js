const categories = document.querySelectorAll("#categories .item");
console.log(categories);
console.log(`В списке ${categories.length} категории`);

categories.forEach(item => {
  const h2 = item.querySelector("h2");

  const h2Text = h2.innerText;
  const li = item.querySelectorAll("li");

  console.log(`${h2Text}: ${li.length}`);
});