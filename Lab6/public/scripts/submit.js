document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function () {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
  });

  const form = document.getElementById('surveyForm');

  //when form is submitted, redirect to server endpoint
  form.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(this);

    //debug
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ': ' + pair[1]);
    // }

     // Convert form data to JSON format
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    //console.log(jsonData);

    //send post request to /submit endpoint
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    });
  });

});

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}