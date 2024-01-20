function displayCart(){
    var cartContainer = document.getElementById("cart-container");
    var cartPage = document.getElementById("cart-page");
    var emptyCart = true;

    cartContainer.innerHTML = ''; //clear html
    
    for(i = 0; i < products.length; i++){
        console.log(products[i].name + " " + quantities[i]);

        if (quantities[i] != 0){

            //set the cart items
            cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item-container');

            cartItemDiv.innerHTML = `
            <p>${products[i].name}</p>
            <p>x${quantities[i]}</p>`

            cartContainer.appendChild(cartItemDiv);
            emptyCart = false;
        }
    }
    
    if (emptyCart){
        cartContainer.innerHTML = "Shopping cart is empty.";
    }else{
        //shopping cart is not empty, display total price

        totalCostDiv = document.createElement('div');
        totalCostDiv.classList.add('cart-item-container');

        const total = calculateTotalCost();
        totalCostDiv = document.createElement('div');
        totalCostDiv.classList.add('cart-item-container')
        totalCostDiv.innerHTML = `
            <p style="font-weight:bold">Total Cost: </p>
            <p style="font-weight:bold"> $ ${total}</p>`

        cartContainer.appendChild(totalCostDiv);      
    }
    
}

function calculateTotalCost(){
    var totalCost = 0;

    for(i = 0; i < products.length; i++){
        totalCost = totalCost + (products[i].unitPrice * quantities[i]);
    }

    return totalCost.toFixed(2);
} 