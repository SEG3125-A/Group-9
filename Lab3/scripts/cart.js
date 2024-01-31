var emptyCart = true;
var card = "";
var firstName = "";
var lastName = "";
var street = "";
var city = "";
var province = "";
var zipCode = "";

const CartTabs = {
  CART: 0,
  PAYMENT: 1,
  SHIPPING: 2,
  SUMMARY: 3,
};

// Tab switches

function goToCart() {
  changeCartTab(CartTabs.CART);
}

function goToPayment() {
  changeCartTab(CartTabs.PAYMENT);
}

function goToShipping(){
  changeCartTab(CartTabs.SHIPPING);
}

function goToSummary(){
  changeCartTab(CartTabs.SUMMARY);
}


function displayCart() {
  // Switches to cart page
  goToCart();

  var cartContainer = document.getElementById("cart-container");

  cartContainer.innerHTML = "";

  var header = document.createElement("h3");
  var cartHeader = document.createTextNode("Shopping Cart");

  header.appendChild(cartHeader);
  cartContainer.appendChild(header);

  for (i = 0; i < products.length; i++) {
    if (quantities[i] != 0) {
      //set the cart items

      //div for each item at checkout
      var checkoutItem = document.createElement("div");
      checkoutItem.className = "cart-checkout-item";

      //div for product name
      var productName = document.createElement("div");
      productName.textContent = products[i].description;

      // Create a div for the quantity
      var quantity = document.createElement("div");
      quantity.className = "bold-text";
      quantity.textContent =
        "$" + products[i].unitPrice + " (x" + quantities[i] + ")";

      //build checkout item
      checkoutItem.appendChild(productName);
      checkoutItem.appendChild(quantity);

      //append to cart container
      cartContainer.appendChild(checkoutItem);

      emptyCart = false; //there are items in the cart
    }
  }

  cartContainer.appendChild(document.createElement("br"));

  if (emptyCart) {
    cartContainer.innerHTML = "Shopping cart is empty.";
  } else {
    //shopping cart is not empty, display total price
    totalCostDiv = document.createElement("div");
    totalCostDiv.className = "total-checkout-line";

    //div for total text
    var totalText = document.createElement("div");
    totalText.textContent = "Subtotal:";
    totalText.className = "bold-text";

    //div for total cost
    const sum = calculateSubtotalCost();
    totalCost = document.createElement("div");
    totalCost.className = "bold-text";
    totalCost.textContent = "$" + sum;

    totalCostDiv.appendChild(totalText);
    totalCostDiv.appendChild(totalCost);
    cartContainer.appendChild(totalCostDiv);

    //optional pay button
    payContainer = document.createElement("div");
    payContainer.className = "pay-container";

    checkoutBtn = document.createElement("button");
    checkoutBtn.className = "checkout-btn";
    var text = document.createTextNode("Proceed to checkout");
    checkoutBtn.appendChild(text);
    checkoutBtn.addEventListener("click", goToPayment);

    payContainer.appendChild(checkoutBtn);
    cartContainer.appendChild(payContainer);

    if (sum == 0) {
      emptyCart = true;
      cartContainer.innerHTML = "Shopping cart is empty.";
    }
  }
}

function calculateSubtotalCost() {
  var totalCost = 0;
  for (i = 0; i < products.length; i++) {
    totalCost = totalCost + products[i].unitPrice * quantities[i];
  }
  return totalCost.toFixed(2);
}

function changeCartTab(index) {
  // If the cart is empty don't let the tab change
  if (emptyCart) return;

  let cart = document.getElementById("cart-container");
  let billing = document.getElementById("billing-container");
  let shipping = document.getElementById("shipping-container");
  let payment = document.getElementById("checkout-container");

  let tabs = [cart,billing,shipping,payment];
  // all buttons
  buttonsNav = document.getElementsByClassName("btn-nav-cart");

  var i = 0;
  // for each button, change active, make tabs invisible 
  for (let tab in tabs) {
    buttonsNav[i].className = buttonsNav[i++].className.replace(" active", "");
    tabs[tab].style.display = "none";
  }
  // make selected tab visible
  tabs[index].style.display = "block";
  nextButton = buttonsNav[index];
  changeProgressBar(nextButton);
  nextButton.className += " active";
}

function changeProgressBar(selectedButton) {
  const stepperItems = document.querySelectorAll(".stepper-item");
  stepperItems.forEach((item) => item.classList.remove("completed"));
  const selectedTabIndex = Array.from(stepperItems).indexOf(
    selectedButton.parentNode
  );

  for (let i = 0; i <= selectedTabIndex - 1; i++) {
    stepperItems[i].classList.add("completed");
  }
}




document
  .getElementById("billing-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    card = document.getElementById("card").value;
  });

function displayShipping() {
  var cardHolderName = document.getElementById("cardholder-name").value;
  var cardNumber = document.getElementById("card-number").value;
  card = cardNumber;
  var expirationDate = document.getElementById("expiration-date").value;
  var cvv = document.getElementById("cvv").value;
  var postalZip = document.getElementById("postal-zip").value;

  if (cardHolderName && cardNumber && expirationDate && cvv && postalZip) {
    document.getElementById("billing-feedback").textContent =
      "Billing information saved successfully.";
    document.getElementById("billing-feedback").style.color = "green";
    document.getElementById("billing-container").style.display = "none";
    document.getElementById("shipping-container").style.display = "block";
    goToShipping();
  } else {
    document.getElementById("billing-feedback").textContent =
      "Please fill out all fields in the billing form.";
    document.getElementById("billing-feedback").style.color = "red";
  }
}

function displayPayment() {
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  street = document.getElementById("street").value;
  city = document.getElementById("city").value;
  province = document.getElementById("province").value;
  zipCode = document.getElementById("zip").value;

  if (firstName && lastName && street && city && province && zipCode) {
    document.getElementById("shipping-feedback").textContent =
      "Shipping information saved successfully.";
    document.getElementById("shipping-container").style.display = "none";
    document.getElementById("shipping-feedback").style.color = "green";
    document.getElementById("shipping-container").style.display = "block";
    goToSummary();
    displayCheckout();
  } else {
    document.getElementById("shipping-feedback").textContent =
      "Please fill out all fields in the shipping form.";
    document.getElementById("shipping-feedback").style.color = "red";
  }
}

function getShippingInfo() {
  var shippingInfoDiv = document.createElement("div");
  shippingInfoDiv.className = "shipping-summary";

  var fullNameLine = document.createElement("p");
  var addressLine1 = document.createElement("p");
  var addressLine2 = document.createElement("p");

  var fullName = document.createTextNode(`${firstName} ${lastName}`);
  var address1 = document.createTextNode(street);
  var address2 = document.createTextNode(`${city}, ${province} ${zipCode}`);

  fullNameLine.appendChild(fullName);
  addressLine1.appendChild(address1);
  addressLine2.appendChild(address2);

  shippingInfoDiv.appendChild(fullNameLine);
  shippingInfoDiv.appendChild(addressLine1);
  shippingInfoDiv.appendChild(addressLine2);

  return shippingInfoDiv;
}

function getCardInfo() {
  var paymentMethodDiv = document.createElement("div");
  paymentMethodDiv.style.lineHeight = "5px";
  var paymentMethodLine = document.createElement("p");
  var cardInfoEnd = document.createTextNode(
    `Paying with card ending in ${card.slice(-4)}`
  );

  paymentMethodLine.appendChild(cardInfoEnd);
  paymentMethodDiv.appendChild(paymentMethodLine);

  return paymentMethodDiv;
}

function displayCheckout() {
  var checkoutContainer = document.getElementById("checkout-container");

  checkoutContainer.innerHTML = "<h3>Order Summary<h3><hr>";

  var shippingInfoHeader = document.createElement("h4");
  var shippingInfoTitle = document.createTextNode("Shipping address");
  shippingInfoHeader.appendChild(shippingInfoTitle);
  checkoutContainer.appendChild(shippingInfoHeader);

  const shippingInfoDiv = getShippingInfo();
  checkoutContainer.appendChild(shippingInfoDiv);

  var paymentDiv = document.createElement("h4");
  var paymentTitle = document.createTextNode("Payment method");
  paymentDiv.appendChild(paymentTitle);
  checkoutContainer.appendChild(paymentDiv);

  var paymentMethodInfoDiv = getCardInfo();
  checkoutContainer.appendChild(paymentMethodInfoDiv);

  var orderDiv = document.createElement("h4");
  var orderTitle = document.createTextNode("Cart");
  orderDiv.appendChild(orderTitle);
  checkoutContainer.appendChild(orderDiv);

  for (i = 0; i < products.length; i++) {
    if (quantities[i] != 0) {
      var checkoutItem = document.createElement("div");
      checkoutItem.className = "cart-checkout-item";

      var productName = document.createElement("div");
      productName.textContent = products[i].description;

      var quantity = document.createElement("div");
      quantity.className = "bold-text";
      quantity.textContent =
        "$" + products[i].unitPrice + " (x" + quantities[i] + ")";

      checkoutItem.appendChild(productName);
      checkoutItem.appendChild(quantity);

      checkoutContainer.appendChild(checkoutItem);
    }
  }

  checkoutContainer.appendChild(document.createElement("br"));

  var orderTotalDiv = document.createElement("div");

  var subtotalDiv = document.createElement("div");
  subtotalDiv.className = "total-checkout-line";

  var subtotalText = document.createElement("div");
  subtotalText.textContent = "Subtotal:";
  subtotalText.className = "bold-text";

  const subtotal = calculateSubtotalCost();
  var subtotalAmount = document.createElement("div");
  subtotalAmount.className = "bold-text";
  subtotalAmount.textContent = "$" + subtotal;

  subtotalDiv.appendChild(subtotalText);
  subtotalDiv.appendChild(subtotalAmount);

  const tax = getEstimatedTax(subtotal);

  var taxDiv = document.createElement("div");
  taxDiv.className = "total-checkout-line";

  var taxText = document.createElement("div");
  taxText.textContent = "Estimated GST/HST:";

  var taxAmount = document.createElement("div");
  taxAmount.textContent = "$" + tax;

  taxDiv.appendChild(taxText);
  taxDiv.appendChild(taxAmount);

  orderTotalDiv.appendChild(subtotalDiv);
  orderTotalDiv.appendChild(taxDiv);

  orderTotalDiv.appendChild(document.createElement("hr"));

  const orderTotal = getOrderTotal(subtotal, tax);

  var totalDiv = document.createElement("div");
  totalDiv.className = "total-checkout-line";

  var totalText = document.createElement("div");
  totalText.textContent = "Order Total:";
  totalText.className = "bold-text";

  var totalAmount = document.createElement("div");
  totalAmount.textContent = "$" + orderTotal;
  totalAmount.className = "bold-text";

  totalDiv.appendChild(totalText);
  totalDiv.appendChild(totalAmount);

  orderTotalDiv.appendChild(totalDiv);
  checkoutContainer.appendChild(orderTotalDiv);

  var checkoutButtonContainer = document.createElement("div");
  checkoutButtonContainer.style.textAlign = "right";
  checkoutButtonContainer.style.marginTop = "10px";
  var checkoutButton = document.createElement("button");
  checkoutButton.className = "checkout-btn";
  var buttonText = document.createTextNode("Place order");
  checkoutButton.onclick = placeOrder;
  checkoutButton.appendChild(buttonText);
  checkoutButtonContainer.appendChild(checkoutButton);
  checkoutContainer.appendChild(checkoutButtonContainer);
}

function getEstimatedTax(subtotal) {
  const tax = subtotal * 0.13;
  return tax.toFixed(2);
}

function getOrderTotal(subtotal, tax) {
  const orderTotal = parseFloat(subtotal) + parseFloat(tax);
  return orderTotal.toFixed(2);
}

function placeOrder() {
  var paymentMessage = document.getElementById("payment-message");
  paymentMessage.style.display = "flex";
}

function closePaymentMessage() {
  document.getElementById("payment-message").style.display = "none";
}
