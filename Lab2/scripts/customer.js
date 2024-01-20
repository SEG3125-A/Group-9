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
    preferenceDiv =  document.getElementById("preference")
    preferenceDiv.innerHTML = `<p>You chose no dietery restrictions.</p>`;
    
    if(dietaryPreferences.length == 0) return;

    for (i = 0; i < dietaryPreferences.length; i++) {
        if(dietaryPreferences[i] == "None"){
            return;
        }
      result += `<li>${dietaryPreferences[i]}</li>`;
    }
    preferenceDiv.innerHTML = `<p>Chosen dietery restrictions: <ul>${result}</ul></p>`;
}
  