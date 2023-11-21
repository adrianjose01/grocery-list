const $form = document.getElementById("form");
const $input = document.getElementById("grocery");
const $groceryList = document.getElementById("grocery-list");
const $clear = document.getElementById("clear");

let groceries = [];

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const grocery = $input.value;
  groceries.push({ name: grocery, id: Math.random().toString() });
  insertGroceriesInHtml();
  $input.value = "";
});

const insertGroceriesInHtml = () => {
  $groceryList.innerHTML = "";
  groceries.forEach((g) => {
    let html = `<section class="grocery-container">
        <p>${g.name}</p>
        <button data-id="${g.id}" class="delete-btn" onClick="deleteGrocery(${g.id})">X</button>
      </section>`;
    $groceryList.insertAdjacentHTML("beforeend", html);
  });
};

$clear.addEventListener("click", () => {
  groceries.length = 0;
  insertGroceriesInHtml();
});

const deleteGrocery = (id) => {
  groceries = groceries.filter((g) => g.id != id);
  insertGroceriesInHtml();
};

insertGroceriesInHtml();
