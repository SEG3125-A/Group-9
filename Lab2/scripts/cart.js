function displayCart(){
    var cartContainer = document.getElementById("cart-container");
    var emptyCart = true;

    cartContainer.innerHTML = ''; //clear html
    
    for(i = 0; i < products.length; i++){
        console.log(products[i].name + " " + quantities[i]);

        if (quantities[i] != 0){
            cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `<p>${products[i].name}</p>`
            cartContainer.appendChild(cartItemDiv);
            emptyCart = false;
        }
    }

    if (emptyCart){
        cartContainer.innerHTML = "Shopping cart is empty.";
    }
    
}