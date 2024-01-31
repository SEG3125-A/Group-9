const quantities = new Array(products.length).fill(0);
let selectedCategory = "All";

products.sort((a, b) => a.unitPrice - b.unitPrice);

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

  let minPriceText = document.querySelector(".input-min");
  let maxPriceText = document.querySelector(".input-max");
  var minPrice = parseInt(minPriceText.textContent);
  var maxPrice = parseInt(maxPriceText.textContent);
  console.log(minPriceText);

  products.forEach((product, index) => {
    //Check price range
    const isWithinPriceRange =
      product.unitPrice <= maxPrice && product.unitPrice >= minPrice;

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
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    // If dietary restrictions hold display the product
    if (
      restrictionsHold &&
      matchesSearch &&
      isWithinPriceRange &&
      matchesCategory
    ) {
      const productDiv = displayProduct(product, index);
      productList.appendChild(productDiv);
      productsExist = true;
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
        <div class="read-product">
          <button class="read-product-button" onclick="textToSpeech('${product.description}', '${product.price}')"></button>
        </div>
        <h3>${product.name}</h3>
        <div class="product-img">
          <img src=${product.image} alt=${product.name}>
        </div>
        <div class="quantity-bottom-div">
          <p>${product.description}</p>
          <p>${product.price}</p>
        </div>
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
  preferenceDiv.innerHTML = `<p></p>`;

  //no dietary preferences chosen (no checked boxes)
  if (dietaryPreferences.length == 0) return;

  for (i = 0; i < dietaryPreferences.length; i++) {
    // if (dietaryPreferences[i] == "None") {
    //   return;
    // }
    if (dietaryPreferences[i] == "GlutenFree") result += `<li>Gluten-Free Products</li>`;
    else if (dietaryPreferences[i] == "NonOrganic")
      result += `<li>Non-Organic Products</li>`;
    else if (dietaryPreferences[i] == "Vegan")
      result += `<li>Vegan Products</li>`;
    else if (dietaryPreferences[i] == "Organic")
      result += `<li>Organic Products</li>`;
  }
  preferenceDiv.innerHTML = `<p>Here are our products based on your preselection: <ul>${result}</ul></p>`;
}

// function setDietaryPreferences(event) {
//   var selectedOptions = [];
//   var options = event.target.options;

//   for (i = 0; i < options.length; i++) {
//     if (options[i].selected) {
//       selectedOptions.push(options[i].value);
//     }
//   }
//   dietaryPreferences = selectedOptions;

//   //document.getElementById('output').textContent = "Chosen Products: " + dietaryPreferences.join(", ");
// }

function updateDietaryPreferences() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkedValues = [];

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value);
    }
  });

  dietaryPreferences = checkedValues;

  //document.getElementById('output').textContent = "Chosen Products: " + checkedValues.join(", ");
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

function onCategoryChange() {
  selectedCategory = document.getElementById("category-select").value;
  displayProducts();
}
