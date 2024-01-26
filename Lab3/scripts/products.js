const products = [
  {
    name: "Lettuce",
    description: "Fresh lettuce",
    price: "$1.50 per head",
    unitPrice: 1.5,
    Vegan: true,
    GlutenFree: true,
    Organic: true,
    NonOrganic: false,
  },
  {
    name: "Bread",
    description: "Whole wheat bread",
    price: "$2 per loaf",
    unitPrice: 2,
    Vegan: true,
    GlutenFree: false,
    Organic: true,
    NonOrganic: false,
  },
  {
    name: "Tomatoes",
    description: "Ripe tomatoes",
    price: "$2 per lb",
    unitPrice: 2,
    Vegan: true,
    GlutenFree: true,
    Organic: true,
    NonOrganic: false,
  },
  {
    name: "Potatoes",
    description: "Russet potatoes",
    price: "$2 per lb",
    unitPrice: 2,
    Vegan: false,
    GlutenFree: false,
    Organic: false,
    NonOrganic: true,
  },
  {
    name: "Apples",
    description: "Fresh green apples",
    price: "$3 per lb",
    unitPrice: 3,
    Vegan: true,
    GlutenFree: true,
    Organic: true,
    NonOrganic: false,
  },
  {
    name: "Eggs",
    description: "Free-range eggs",
    price: "$3 per dozen",
    unitPrice: 3,
    Vegan: false,
    GlutenFree: true,
    Organic: false,
    NonOrganic: true,
  },
  {
    name: "Milk",
    description: "Organic 2% milk",
    price: "$4 per gallon",
    unitPrice: 4,
    Vegan: false,
    GlutenFree: true,
    Organic: false,
    NonOrganic: true,
  },
  {
    name: "Oranges",
    description: "Juicy oranges",
    price: "$4 per lb",
    unitPrice: 4,
    Vegan: true,
    GlutenFree: true,
    Organic: true,
    NonOrganic: false,
  },
  {
    name: "Cheese",
    description: "Cheddar cheese block",
    price: "$5",
    unitPrice: 5,
    Vegan: false,
    GlutenFree: true,
    Organic: false,
    NonOrganic: true,
  },
  {
    name: "Chicken",
    description: "Boneless chicken breast",
    price: "$5 per lb",
    unitPrice: 5,
    Vegan: false,
    GlutenFree: true,
    Organic: false,
    NonOrganic: true,
  },
];

const quantities = new Array(products.length).fill(0);

function changeQuantity(action, index) {
  if (action === "plus") {
    quantities[index]++;
  } else if (action === "minus" && quantities[index] > 0) {
    quantities[index]--;
  }

  document.getElementById(`quantity-${index}`).innerText = quantities[index];
}

function displayProducts(dietaryPreferences, searchQuery = "") {
  displayPreference(dietaryPreferences);
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  preferenceDiv = document.getElementById("preference");
  var productsExist = false;

  products.forEach((product, index) => {
    // Check if the dietary restrictions hold
    let restrictionsHold = true;
    for (let i = 0; i < dietaryPreferences.length; i++) {
      if (dietaryPreferences[i] == "None") {
        restrictionsHold = true;
        break;
      }
      if (!product[dietaryPreferences[i]]) {
        restrictionsHold = false;
      }
    }

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // If dietary restrictions hold display the product
    if (restrictionsHold && matchesSearch) {
      const productDiv = displayProduct(product, index);
      productList.appendChild(productDiv);
      productsExist = true; //set to true if we have at least one product in the category chosen
    }
  });

  // we did not append any product to the productList
  if (!productsExist) {
    var newText = document.createTextNode(
      "No products match your dietary preferences."
    );
    preferenceDiv.appendChild(newText);
  }
}

function displayProduct(product, index) {
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <div class="quantity-selector">
            <button onclick="changeQuantity('minus', ${index})">-</button>
            <span id="quantity-${index}">${quantities[index]}</span>
            <button onclick="changeQuantity('plus', ${index})">+</button>
        </div>
    `;

  return productDiv;
}

function displayPreference(dietaryPreferences) {
  let result = "";
  preferenceDiv = document.getElementById("preference");
  preferenceDiv.innerHTML = `<p>You chose no dietary restrictions.</p>`;

  if (dietaryPreferences.length == 0) return;

  for (i = 0; i < dietaryPreferences.length; i++) {
    if (dietaryPreferences[i] == "None") {
      return;
    }
    if (dietaryPreferences[i] == "GlutenFree") result += `<li>Gluten-free</li>`;
    else if (dietaryPreferences[i] == "NonOrganic")
      result += `<li>Non-organic</li>`;
    else result += `<li>${dietaryPreferences[i]}</li>`;
  }
  preferenceDiv.innerHTML = `<p>Chosen dietary restrictions: <ul>${result}</ul></p>`;
}

function setDietaryPreferences(event) {
  var selectedOptions = [];
  var options = event.target.options;

  for (i = 0; i < options.length; i++) {
    if (options[i].selected) {
      selectedOptions.push(options[i].value);
    }
  }
  dietaryPreferences = selectedOptions;
}

function displayShoppingCart() {
  for (i = 0; i < products.length; i++) {
    console.log(products[i].name + " " + quantities[i]);
  }
}

function onSearchInput() {
  const searchQuery = document.getElementById("search-input").value;
  displayProducts(dietaryPreferences, searchQuery);
}
