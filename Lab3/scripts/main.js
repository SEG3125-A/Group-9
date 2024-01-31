const customerInfo = "customer-info";
const productPage = "products-page";
const cartPage = "cart-page";
let dietaryPreferences = "";
let fontSmall = true;

smallFontSize = "20px";
bigFontSize = "30px";

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
    resetFont("customer");

    customer.style.display = "block";
    products.style.display = "none";
    cart.style.display = "none";

  } else if (tabName == productPage) {
    resetFont("products");
    // firefox doesn't refresh the page
    updateDietaryPreferences()

    customer.style.display = "none";
    products.style.display = "block";
    cart.style.display = "none";
    listenPriceChange();

  } else if (tabName == cartPage) {
    resetFont("cart");
    
    customer.style.display = "none";
    products.style.display = "none";
    cart.style.display = "block";
    displayCart();
  }
  changeProgressBar(event)
  console.log(products.style.display === "none");

  event.currentTarget.className += " active";
}



function changeFont(fontSize, page){
  var customerInfoElements;
  if(page == "cart") {
    // dont change the progress bar, it's a hustle
    customerInfoElements = document.body.querySelectorAll('.checkout-container-wrapper *');}
  else if(page == "customer") customerInfoElements = document.body.querySelectorAll('#customer-info *');
  else if(page == "products") customerInfoElements = document.body.querySelectorAll('.price-range-slider, .preference-container *');
  else return;

  var desiredFontSize = fontSize;
  for (var i = 0; i < customerInfoElements.length; i++) {
    customerInfoElements[i].style.fontSize = desiredFontSize;
  }
}

function resetFont(page){
  fontSmall = true;
  changeFont(smallFontSize, page);
}

function toggleFontSize(page){
  if(fontSmall){
    changeFont(bigFontSize, page);
  }else changeFont(smallFontSize, page);
  fontSmall = !fontSmall;
}

function textToSpeech(productDescription, productPrice, index) {
  const textToRead = productDescription + " " + productPrice + " Chosen amount is " + quantities[index];
  const utterance = new SpeechSynthesisUtterance(textToRead);
  window.speechSynthesis.speak(utterance);
}