// Create Dynamic Category Section
const LoadCategoryButton = fetch(
  "https://openapi.programming-hero.com/api/phero-tube/categories"
)
  .then((res) => res.json())
  .then((data) => displayCategoryButton(data))
  .catch((err) => console.log("error", err));

function displayCategoryButton(data) {
  const arrayElements = data.categories;
  const buttonContainer = document.getElementById("categoryButtons");
  for (const elementsId of arrayElements) {
    return elementsId.category;
  }
}

const buttons = document.createElement("button");
buttons.innerHTML = `${displayCategoryButton()}`;
