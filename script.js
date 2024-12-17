$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        var formData = $(this).serialize(); // Serialize the form data
        
        $.ajax({
            url: "process.php", // Send data to process.php
            type: "POST",
            data: formData,
            success: function (response) {
                // Show the result div with the submitted data
                var resultData = JSON.parse(response);
                $("#result").show();
                $("#resultName").text(resultData.name);
                $("#resultEmail").text(resultData.email);
                $("#resultPhone").text(resultData.phone);
                $("#resultAddress").text(resultData.address);
            }
        });
    });
});