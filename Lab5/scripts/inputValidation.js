$(document).ready(function () {

    // forces the user to write correct format for phone number
    $('#customerPhone').on('input', function () {
        var phoneNumber = $(this).val().replace(/\s/g, ''); // Removes the spaces
        phoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
        $(this).val(phoneNumber);
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
        var phoneNumberRegex = /^\d{10}$/;
        var numerInput = $('#customerPhone').val();
        if (!phoneNumberRegex.test(numerInput)) {
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

        // cvv number validation
        var cvvRegex = /^\d{3}$/;
        var cvvInput = $('#cvv').val();
        if (!cvvRegex.test(cvvInput)) {
            $('#cvv').next('.error-msg').show();
            isValid = false;
        } else {
            $('#cvv').next('.error-msg').hide();
        }

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

    $('#cardNumber').on('input', function () {
        $('#cardNumber').next('.error-msg').hide();
    });

    $('#cvv').on('input', function () {
        $('#cvv').next('.error-msg').hide();
    });
});