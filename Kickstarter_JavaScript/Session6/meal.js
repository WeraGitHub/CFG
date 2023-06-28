    // Array of available ingredients
    const ingredients = [
      "Basil",
      "Cumin",
      "Coriander",
      "Oregano",
      "Thyme",
      "Rosemary",
      "Turmeric",
      "Paprika",
      "Cinnamon",
      "Saffron",
      "Ginger",
      "Cardamom",
      "Fenugreek",
      "Cloves",
      "Bay Leaves"
    ];

    // Array of available proteins
    const proteins = ["Chicken", "Salmon", "Beef", "Tofu"];

    // Function to generate a recipe
    function generateRecipe() {
      const recipeList = document.getElementById("recipe-list");
      recipeList.innerHTML = "";

      // Get random ingredients and protein
      const randomIngredients = getRandomIngredients(3);
      const randomProtein = getRandomProtein();

      // Combine random ingredients and protein
      const allIngredients = randomIngredients.concat(randomProtein);

      // Loop through all ingredients and create list items
      for (let i = 0; i < allIngredients.length; i++) {
        const ingredient = allIngredients[i];
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        recipeList.appendChild(listItem);
      }
    }

    // Function to get random ingredients
    function getRandomIngredients(count) {
      const randomIngredients = [];
      const ingredientsCopy = ingredients.slice();

      // Pick random ingredients from the array
      while (randomIngredients.length < count) {
        const randomIndex = Math.floor(Math.random() * ingredientsCopy.length);
        const pickedIngredient = ingredientsCopy.splice(randomIndex, 1)[0];
        randomIngredients.push(pickedIngredient);
      }
      return randomIngredients;
    }

    // Function to get random protein
    function getRandomProtein() {
      const randomIndex = Math.floor(Math.random() * proteins.length);
      return proteins[randomIndex];
    }
