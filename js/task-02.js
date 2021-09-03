const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, ingredient) => str + `<li>${ingredient}</li>`, '');

ingredientsEl.innerHTML = list;

