const customerInfo = "customer-info";
const productPage = "products-page";
const cartPage = "cart-page";
let dietaryPreferences = "";

function displayTab(event, tabName) {
  let customer = document.getElementById(customerInfo);
  let products = document.getElementById(productPage);
  let cart = document.getElementById(cartPage);

  // used code from lab to make buttons active
  buttonsNav = document.getElementsByClassName("btn-nav");
  for (i = 0; i < buttonsNav.length; i++) {
    buttonsNav[i].className = buttonsNav[i].className.replace(" active", "");
  }

  if (tabName == customerInfo) {
    customer.style.display = "block";
    products.style.display = "none";
    cart.style.display = "none";
  } else if (tabName == productPage) {
    customer.style.display = "none";
    products.style.display = "block";
    cart.style.display = "none";
  } else if (tabName == cartPage) {
    customer.style.display = "none";
    products.style.display = "none";
    cart.style.display = "block";
  }

  event.currentTarget.className += " active";
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

function display() {
  let result = "";
  for (i = 0; i < dietaryPreferences.length; i++) {
    result += `<li>${dietaryPreferences[i]}</li>`;
  }
  document.getElementById(
    "preference"
  ).innerHTML = `<p>Your preferences are: <ul>${result}</ul></p>`;
}

const products = [
  { name: "Apples", description: "Fresh green apples", price: "$3 per lb" },
  { name: "Bread", description: "Whole wheat bread", price: "$2 per loaf" },
  { name: "Milk", description: "Organic 2% milk", price: "$4 per gallon" },
  { name: "Eggs", description: "Free-range eggs", price: "$3 per dozen" },
  { name: "Cheese", description: "Cheddar cheese block", price: "$5" },
  { name: "Tomatoes", description: "Ripe tomatoes", price: "$2 per lb" },
  {
    name: "Chicken",
    description: "Boneless chicken breast",
    price: "$5 per lb",
  },
  { name: "Lettuce", description: "Fresh lettuce", price: "$1.50 per head" },
  { name: "Potatoes", description: "Russet potatoes", price: "$2 per lb" },
  { name: "Oranges", description: "Juicy oranges", price: "$4 per lb" },
];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;

    productList.appendChild(productDiv);
  });
}

displayProducts();
