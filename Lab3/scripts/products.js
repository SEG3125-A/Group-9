const quantities = new Array(products.length).fill(0);

function changeQuantity(action, index) {
  if (action === "plus") {
    quantities[index]++;
  } else if (action === "minus" && quantities[index] > 0) {
    quantities[index]--;
  }

  document.getElementById(`quantity-${index}`).innerText = quantities[index];
}

function displayProducts(searchQuery = "") {
  displayPreference();
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  preferenceDiv = document.getElementById("preference");
  var productsExist = false;
  
  let priceInput = document.querySelectorAll(".price-input input");

  products.forEach((product, index) => {

    //Check price range 

    var minPrice = parseInt(priceInput[0].value);
    var maxPrice = parseInt(priceInput[1].value);
    const isWithinPriceRange = (product.unitPrice <= maxPrice && product.unitPrice >= minPrice);

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
      .startsWith(searchQuery.toLowerCase());
    // If dietary restrictions hold display the product
    if (restrictionsHold && matchesSearch && isWithinPriceRange) {
      const productDiv = displayProduct(product, index);
      productList.appendChild(productDiv);
      productsExist = true; //set to true if we have at least one product in the category chosen
    }
  });

  // we did not append any product to the productList
  if (!productsExist) {
    var newText = document.createTextNode(
      "No products match your preferences."
    );
    preferenceDiv.appendChild(newText);
  }
}

function displayProduct(product, index) {
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <div class="product-img">
          <img src=${product.image} alt=${product.name}>
        </div>
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

function displayPreference() {
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
  displayProducts(searchQuery);
}

