document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function () {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
  });
});

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}
