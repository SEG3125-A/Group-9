function mapLoaded() {
  var loadingIcon = document.querySelector(".loading-icon");
  loadingIcon.style.display = "none";
}

function showModal(event) {
  let form = $("#booking-form")[0];

  //check required fields
  let isFormValid = form.checkValidity();
  if (!isFormValid) {
    form.reportValidity();
  } else {
    //if all filled correctly, then show modal
    event.preventDefault();
    $("#success-modal").modal("show");
  }
}

function selectService(serviceName) {
  // Update the dropdown
  document.getElementById("serviceSelection").value = serviceName;
  // Scroll to the booking section
  document
    .getElementById("booking-section")
    .scrollIntoView({ behavior: "smooth" });
}

// enables tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})