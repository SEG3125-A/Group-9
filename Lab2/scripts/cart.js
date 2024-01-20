function displayCart(){
    var cartContainer = document.getElementById("cart-container");
    var cartPage = document.getElementById("cart-page");
    var emptyCart = true;

    //clear html
    cartContainer.innerHTML = '';
    
    for(i = 0; i < products.length; i++){
        console.log(products[i].name + " " + quantities[i]);

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
            quantity.className = 'cart-quantity';
            quantity.textContent = 'x ' + quantities[i];

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
        totalText.style.fontWeight = 'bold';

        //div for total cost
        const sum = calculateTotalCost();
        totalCost = document.createElement('div');
        totalCost.className = 'cart-quantity';
        totalCost.textContent = '$ ' + sum;
        totalCost.style.fontWeight = 'bold';

        totalCostDiv.appendChild(totalText);
        totalCostDiv.appendChild(totalCost);
        cartContainer.appendChild(totalCostDiv);    
        
        //optional pay button
        payContainer = document.createElement('div');
        payContainer.className = 'pay-container';
        
        checkoutBtn = document.createElement('BUTTON');
        var text = document.createTextNode("Pay");

        //style
        checkoutBtn.style.backgroundColor = '#282c34';
        checkoutBtn.style.color = 'white';
        checkoutBtn.style.border = 'none';
        checkoutBtn.style.borderRadius = '10px';
        checkoutBtn.style.cursor = 'pointer';
        checkoutBtn.style.padding = '5px 20px 5px 20px';

        checkoutBtn.appendChild(text);
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