const customerInfo = 'customer-info';
const productPage = 'products-page';
const cartPage = 'cart-page';
let dietaryPreferences = '';

function displayTab(event, tabName) {
    let customer = document.getElementById(customerInfo);
    let products = document.getElementById(productPage);
    let cart = document.getElementById(cartPage)

    // used code from lab to make buttons active
    buttonsNav = document.getElementsByClassName('btn-nav')
    for (i = 0; i < buttonsNav.length; i++) {
        buttonsNav[i].className = buttonsNav[i].className.replace(' active', '');
    }

    if (tabName == customerInfo) {
        customer.style.display = 'block';
        products.style.display = 'none';
        cart.style.display = 'none';
    } else if (tabName == productPage) {
        customer.style.display = 'none';
        products.style.display = 'block';
        cart.style.display = 'none';
    } else if (tabName == cartPage) {
        customer.style.display = 'none';
        products.style.display = 'none';
        cart.style.display = 'block';
    }

    event.currentTarget.className += ' active';

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
    let result = '';
    for (i = 0; i < dietaryPreferences.length; i++) {
        result += `<li>${dietaryPreferences[i]}</li>`;
    }
    document.getElementById('preference').innerHTML = `<p>Your preferences are: <ul>${result}</ul></p>`
}