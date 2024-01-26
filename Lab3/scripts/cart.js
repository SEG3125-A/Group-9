let cart = document.getElementById("cart-container");
let billing = document.getElementById("billing-container");
let shipping = document.getElementById("shipping-container");
let payment = document.getElementById("payment-container");

function displayCart(){
    var cartContainer = document.getElementById("cart-container");
    var cartPage = document.getElementById("cart-page");
    var emptyCart = true;

    cartContainer.innerHTML = ""

    for(i = 0; i < products.length; i++){
        if (quantities[i] != 0){
            //set the cart items
    
            //div for each item at checkout
            var checkoutItem = document.createElement('div');
            checkoutItem.className = 'cart-checkout-item';

            //div for product name
            var productName = document.createElement('div');
            productName.textContent = products[i].name;

            // Create a div for the quantity
            var quantity = document.createElement('div');
            quantity.className = 'bold-text';
            quantity.textContent = '$' + products[i].unitPrice + ' (x' + quantities[i] + ')';

            //build checkout item
            checkoutItem.appendChild(productName);
            checkoutItem.appendChild(quantity);

            //append to cart container
            cartContainer.appendChild(checkoutItem);

            emptyCart = false; //there are items in the cart
        }
    }

    cartContainer.appendChild(document.createElement('br'));
    
    if (emptyCart){
        cartContainer.innerHTML = "Shopping cart is empty.";
    }else{
        //shopping cart is not empty, display total price
        totalCostDiv = document.createElement('div');
        totalCostDiv.className = 'total-checkout';

        //div for total text
        var totalText = document.createElement('div');
        totalText.textContent = "Total Cost:";
        totalText.className = 'bold-text';

        //div for total cost
        const sum = calculateTotalCost();
        totalCost = document.createElement('div');
        totalCost.className = 'bold-text';
        totalCost.textContent = '$ ' + sum;

        totalCostDiv.appendChild(totalText);
        totalCostDiv.appendChild(totalCost);
        cartContainer.appendChild(totalCostDiv);    
        
        //optional pay button
        payContainer = document.createElement('div');
        payContainer.className = 'pay-container';
        
        checkoutBtn = document.createElement('BUTTON');
        checkoutBtn.className = 'checkout-btn hover-btn';
        var text = document.createTextNode("Pay");
        checkoutBtn.appendChild(text);
        checkoutBtn.addEventListener("click", pay);

        payContainer.appendChild(checkoutBtn);
        cartContainer.appendChild(payContainer);
    }
}

function calculateTotalCost(){
    var totalCost = 0;
    for(i = 0; i < products.length; i++){
        totalCost = totalCost + (products[i].unitPrice * quantities[i]);
    }
    return totalCost.toFixed(2);
} 



function changeCartTab(event, tabName) {

    let tabs = {"cart": cart, "billing": billing, "shipping": shipping, "payment": payment};
    // Array that only contains document elements
    let tabValues = Object.values(tabs);

    // used code from lab to make buttons active
    buttonsNav = document.getElementsByClassName("btn-nav-cart");
    for (i = 0; i < buttonsNav.length; i++) {
      buttonsNav[i].className = buttonsNav[i].className.replace(" active", "");
      tabValues[i].style.display = "none";
    }

    tabs[tabName].style.display = "block";
    changeProgressBar(event);
    event.currentTarget.className += " active";

  }
  

function changeProgressBar(event) {
    const stepperItems = document.querySelectorAll('.stepper-item');
    stepperItems.forEach(item => item.classList.remove('completed'));
    const selectedButton = event.currentTarget;
    const selectedTabIndex = Array.from(stepperItems).indexOf(selectedButton.parentNode);
  
    for (let i = 0; i <= selectedTabIndex-1; i++) {
      stepperItems[i].classList.add('completed');
    }
}

function pay(){
    const billingButton = document.getElementById('billing-button');
    billingButton.click();
}


