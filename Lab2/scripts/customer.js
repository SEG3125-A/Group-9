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
  
function displayCustomerSection() {
    let result = "";
    for (i = 0; i < dietaryPreferences.length; i++) {
      result += `<li>${dietaryPreferences[i]}</li>`;
    }
    document.getElementById(
      "preference"
    ).innerHTML = `<p>Your preferences are: <ul>${result}</ul></p>`;
}
  