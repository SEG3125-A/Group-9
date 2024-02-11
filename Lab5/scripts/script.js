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

var offday;
document.getElementById('professionalSelection').addEventListener('click', function () {
  var selectedProfessional = document.getElementById('professionalSelection').value;

  var bookingdate = document.getElementById("bookingDate");
  bookingdate.value = "";
  switch (selectedProfessional) {
    case "Leo Paul":
        offday = 1;
        break;
    case "Kate Phillips":
        offday = 2;
        break;
    case "Lynn Myers":
        offday = 3;
        break;
    case "Philip Meadows":
        offday = 4;
        break;
    default:
        offday = 1; 
        break;
  }
});