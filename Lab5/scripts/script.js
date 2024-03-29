function mapLoaded() {
  var loadingIcon = document.querySelector(".loading-icon");
  loadingIcon.style.display = "none";
}

function showModal(event) {
  let form = $("#booking-form")[0];

  // Check required fields
  let isFormValid = form.checkValidity();
  if (!isFormValid) {
    form.reportValidity();
  } else {
    // If all filled correctly, then show modal using Bootstrap modal method
    event.preventDefault();
    $("#success-modal").modal("show");
  }
}

function selectService(serviceName) {
  // Update the dropdown
  const serviceSelection = document.getElementById("serviceSelection");
  serviceSelection.value = serviceName;
  // Scroll to the booking section
  document.getElementById("booking-section-start").scrollIntoView({ behavior: "smooth" });
  
  serviceSelection.focus({
    preventScroll: true
  });
}

// enables tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//for firefox, when you refresh, make sure the change is reflected
var offday;
updateDateAndTime();

// updates the date and time when the professional is changed
function updateDateAndTime(){
  var selectedProfessional = document.getElementById('professionalSelection').value;
  updateOffTime(selectedProfessional);
  updateOffday(selectedProfessional);
}

// disable time off function
function setoffTime(unavailableTimes) {
  unavailableTimes.forEach(function (time) {
    $('#bookingTime option[value="' + time + '"]').prop('disabled', true);
    $('#bookingTime option[value="' + time + '"]').css('color', 'lightgray'); //make the disabled more noticeable
  });
}

// date update function
function updateOffday(selectedProfessional){
  offday = selectedProfessional;
  console.log(selectedProfessional)
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
      offday = 0;
      break;
  }
}


// time update function
function updateOffTime(selectedProfessional){

  if ($('#professionalSelection').val() == null) {
    $('#bookingTime').prop('disabled', true);
    $('#bookingDate').prop('disabled', true);
  } else {
    $('#bookingTime').prop('disabled', false);
    $('#bookingDate').prop('disabled', false);
  }

  //initialization
  $('#bookingTime option').prop('disabled', false);// enable all options first
  $('#bookingTime').val('');// resets time to nothing if u choose another professional
  $('#bookingTime option').css('color', ''); // set color back to default
  $('#bookingDate').val('');// resets date to nothing if u choose another professional

  // disable options based on selected professional
  switch (selectedProfessional) {
    case "Leo Paul":
      setoffTime(['9:00', '10:00', '16:30']);
      break;
    case "Kate Phillips":
      setoffTime(['10:30', '11:30', '12:30']);
      break;
    case "Lynn Myers":
      setoffTime(['9:30', '13:00', '14:00', '15:00']);
      break;
    case "Philip Meadows":
      setoffTime(['15:30', '16:00', '12:00', '14:30']);
      break;
    default:

      break;
  }
}

// this section deals with graying out off times for professional chosen
$(document).ready(function () {
  if ($('#professionalSelection').val() == null) {
    $('#bookingTime').prop('disabled', true);
    $('#bookingDate').prop('disabled', true);
  }

  // grays out off days for specific professionals
  $('#bookingDate').datepicker({
    beforeShowDay: function (date) {
      var day = date.getDay();
      return [(day !== 0 && day !== 6 && day !== offday)];
    },
    changeYear: true,
    changeMonth: true,
    yearRange: '2024:+1',
    minDate: 0,
  });

});