$(document).ready(function () {
    $("#submit").on("click", function () {
        // Check if form is valid
        function validateForm() {
            var formValid = true;
            $('.validate').each(function () {
                if ($(this).val() === '') {
                    formValid = false;
                }
            });
            $('.browser-default').each(function () {
                if ($(this).val() === "") {
                    formValid = false;
                }
            });
            return formValid;
        }

        // Check if form is done
        if (validateForm() == true) {
            // Add new friend
            var newMentor = {
                name: $('#name').val().trim(),
                email: $('#email').val().trim(),
                photo: $('#photo').val().trim(),
                scores: [
                    $('#question1').val(),
                    $('#question2').val(),
                    $('#question3').val(),
                    $('#question4').val(),
                    $('#question5').val(),
                    // $('#question6').val(),
                    // $('#question7').val(),
                    // $('#question8').val(),
                    // $('#question9').val(),
                    // $('#question10').val(),
                ]
            };

            var currentURL = window.location.origin;

            // data = response.json from apiRoutes.js
            $.post(currentURL + "/api/mentors", newMentor, function (data) {
                $("#mentorName").text(data.sameName);
                $("#mentorEmail").text(data.sameEmail);
                $("#mentorImage").attr("src", data.samePicture);
            }).then(function (data) {
                console.log(data);
            });

            $('.modal').modal();
            $('#name').val("");
            $('#email').val("");
            $('#photo').val("");
            $('#question1').val("");
            $('#question2').val("");
            $('#question3').val("");
            $('#question4').val("");
            $('#question5').val("");
            // $('#question6').val("");
            // $('#question7').val("");
            // $('#question8').val("");
            // $('#question9').val("");
            // $('#question10').val("");

        } else {

            alert("Sorry, can't find your match. ALL the questions needs to be filled out. Try again!")
        }

        // Empty each input box by replacing the value with an empty string
        $("#name").val("");
        $("#email").val("");
        $("#photo").val("");
        $("#score").val("");

    });
});