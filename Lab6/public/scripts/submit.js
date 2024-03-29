$(document).ready(function () {

  // forces the user to write names properly (without numbers)
  $('#fname').on('input', function () {
    var input = $(this).val();

    var sanitizedInput = input.replace(/[^a-zA-Z\u00C0-\u024F\s]/g, '');

    $(this).val(sanitizedInput);
  });

  $('#lname').on('input', function () {
    var input = $(this).val();

    var sanitizedInput = input.replace(/[^a-zA-Z\u00C0-\u024F\s]/g, '');

    $(this).val(sanitizedInput);
  });

});

document.addEventListener("DOMContentLoaded", function () {

  var popupContainer = document.getElementById("popupContainer");
  var submitButton = document.getElementById("submitButton");
  const form = document.getElementById("surveyForm");
  var checkboxNotChecked = false;

  submitButton.addEventListener("click", function () {
    validateProvinceDropdown();
    validateCheckboxes('input[name="features"]');
    validateCheckboxes('input[name="shopmost"]');
    validateCheckboxes('input[name="shoppingpref"]');
  })

  // When form is submitted, redirect to server endpoint
  form.addEventListener("submit", function (event) {
    if (checkboxNotChecked) return;

    event.preventDefault();

    if (form.checkValidity()) {
      popupContainer.style.display = "flex";
    }

    const formData = new FormData(this);

    const jsonData = {};

    // Iterate over all form entries
    formData.forEach((value, key) => {
      // Check if the key already exists
      if (jsonData.hasOwnProperty(key)) {
        // If the key's value is not an array, convert it to an array
        if (!Array.isArray(jsonData[key])) {
          jsonData[key] = [jsonData[key]];
        }
        // Append the new value to the existing array
        jsonData[key].push(value);
      } else {
        // If the key doesn't exist, simply add it
        jsonData[key] = value;
      }
    });

    // Send post request to /submit endpoint
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          var a = response.text()
          return a;
        }
        throw new Error("Network response was not ok.");
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  });
});

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

function validateCheckboxes(name) {
  const checkboxes = document.querySelectorAll(name);
  const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  var index = Math.floor(checkboxes.length / 3);

  const firstCheckbox = checkboxes[index]
  checkboxNotChecked = !atLeastOneChecked

  if (atLeastOneChecked) {
    firstCheckbox.required = false;
    firstCheckbox.setCustomValidity('');
  } else {
    firstCheckbox.required = true;
    firstCheckbox.setCustomValidity('Please choose one of the options');
  }
}

function validateProvinceDropdown() {
  const provinceDropdown = document.getElementById("province");
  const selectedOption = provinceDropdown.value;

  const invalidOptionValue = 'Select province';

  // Check if a valid option is selected
  const isValid = selectedOption !== invalidOptionValue;

  // Set custom validation message
  if (isValid) {
    provinceDropdown.setCustomValidity('');
  } else {
    provinceDropdown.setCustomValidity('Please select an option');
  }
}

