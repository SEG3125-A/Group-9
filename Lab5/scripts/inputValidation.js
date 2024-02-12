$(document).ready(function () {

    // forces the user to write correct format for phone number
    $('#customerPhone').on('input', function () {
        var phoneNumber = $(this).val().replace(/\s/g, '');
        phoneNumber = phoneNumber.replace(/\D/g, '');

        phoneNumber = phoneNumber.replace(/(\d{3})-?(\d{3})-?(\d{4})/, '$1-$2-$3');

        $(this).val(phoneNumber);
    });

    // forces the user to write names properly (without numbers)
    $('#customerName').on('input', function () {
        var input = $(this).val();

        var sanitizedInput = input.replace(/[^a-zA-Z\u00C0-\u024F\s]/g, '');

        $(this).val(sanitizedInput);
    });

    $('#cardholderName').on('input', function () {
        var input = $(this).val();

        var sanitizedInput = input.replace(/[^a-zA-Z\u00C0-\u024F\s]/g, '');

        $(this).val(sanitizedInput);
    });

    // format date expiration
    $('#expirationDate').on('input', function () {
        var input = $(this).val();
        var sanitizedInput = input.replace(/\D/g, '');

        var formattedDate = sanitizedInput.replace(/^(\d{2})(\d{2})$/, '$1/$2');

        $(this).val(formattedDate);
    });

    // forces the user to write correct format for card number
    $('#cardNumber').on('input', function () {
        var cardNumber = $(this).val().replace(/\s/g, '');
        cardNumber = cardNumber.replace(/\D/g, '');

        // Insert space every 4 digits
        var formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

        $(this).val(formattedCardNumber);
    });

    // forces the user to write correct format for cvv number
    $('#cvv').on('input', function () {
        var cvv = $(this).val().replace(/\s/g, '');
        cvv = cvv.replace(/\D/g, '');
        $(this).val(cvv);
    });

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

    // validate the input fields when user submits form
    $('#booking-form').submit(function (event) {
        event.preventDefault();
        let isValid = true;

        // email validation
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var emailInput = $('#customerEmail').val();
        if (!emailRegex.test(emailInput)) {
            $('#customerEmail').next('.error-msg').show();
            isValid = false;
        } else {
            $('#customerEmail').next('.error-msg').hide();
        }

        // phone number validation
        var phoneNumberRegex = /^\d{3}-?\d{3}-?\d{4}$/;
        var numberInput = $('#customerPhone').val().replace(/-/g, '');

        if (!phoneNumberRegex.test(numberInput)) {
            $('#customerPhone').next('.error-msg').show();
            isValid = false;
        } else {
            $('#customerPhone').next('.error-msg').hide();
        }


        // card number validation
        var cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
        var cardNumberInput = $('#cardNumber').val();
        if (!cardNumberRegex.test(cardNumberInput)) {
            $('#cardNumber').next('.error-msg').show();
            isValid = false;
        } else {
            $('#cardNumber').next('.error-msg').hide();
        }

        // expiration validation
        var expirationRegex = /^(\d{2})\/(\d{2})$/;
        var expirationInput = $('#expirationDate').val();
        if (!expirationRegex.test(expirationInput)) {
            $('#expirationDate').next('.error-msg').show();
            isValid = false;
        } else {
            $('#expirationDate').next('.error-msg').hide();
        }

        // cvv number validation
        var cvvRegex = /^\d{3}$/;
        var cvvInput = $('#cvv').val();
        if (!cvvRegex.test(cvvInput)) {
            $('#cvv').next('.error-msg').show();
            isValid = false;
        } else {
            $('#cvv').next('.error-msg').hide();
        }

        var selectedDate = $('#bookingDate').val();
        var selectedTime = $('#bookingTime').val();

        //console.log(selectedTime);
        if (selectedTime == null) {
            $('#bookingTime').next('.error-msg').show();
            isValid = false;
        }

        if (selectedDate == "") {
            $('#bookingDate').next('.error-msg').show();
            isValid = false;
        }


        // checks if the time entered has already passed
        // var selectedTimestamp = new Date(selectedDate + ' ' + selectedTime);

        // var currentTimestamp = new Date();
        // if (selectedTimestamp <= currentTimestamp) {
        //     console.log("nope")
        //     $('#bookingTime').next('.error-msg').show();
        //     isValid = false;
        // } else {
        //     $('#bookingTime').next('.error-msg').hide();
        // }

        // display confirmation modal if successful
        if (isValid) {
            showModal(event);
        }
    });

    // This part is to hide the error message as soon as the user starts typing again in the field
    $('#customerEmail').on('input', function () {
        $('#customerEmail').next('.error-msg').hide();
    });

    $('#customerPhone').on('input', function () {
        $('#customerPhone').next('.error-msg').hide();
    });

    $('#expirationDate').on('input', function () {
        $('#expirationDate').next('.error-msg').hide();
    });

    $('#cardNumber').on('input', function () {
        $('#cardNumber').next('.error-msg').hide();
    });

    $('#cvv').on('input', function () {
        $('#cvv').next('.error-msg').hide();
    });

    $('#bookingDate').on('focus', function () {
        $('#bookingDate').next('.error-msg').hide();
    });

    $('#bookingTime').on('input', function () {
        $('#bookingTime').next('.error-msg').hide();
    });
});