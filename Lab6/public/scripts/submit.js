document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("submitButton");
  var clientForm = document.getElementById("surveyForm");
  var popupContainer = document.getElementById("popupContainer");

  submitButton.addEventListener("click", function () {

    // if all required fields are completed in the form
    if (clientForm.checkValidity()) {
      popupContainer.style.display = "flex";
    }
  });

  const form = document.getElementById("surveyForm");

  // When form is submitted, redirect to server endpoint
  form.addEventListener("submit", function (event) {
    event.preventDefault();

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

    // Debug: log the JSON object to ensure it's formatted correctly
    console.log(jsonData);

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
      .then((data) => {
        console.log(data);
        // You can redirect or show a success message here
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
