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
    displayProducts(dietaryPreferences);

  } else if (tabName == cartPage) {
    customer.style.display = "none";
    products.style.display = "none";
    cart.style.display = "block";
    displayCart();
  }

  event.currentTarget.className += " active";
}



