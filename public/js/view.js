// // When user hits the search-btn
// $("#search-btn").on("click", function (event) {
//     event.preventDefault();

//     // When user hits the mentor-search-btn
//     $("#mentor-search-btn").on("click", function () {

//         // Save the mentor they typed into the name-search input
//         var mentorSearched = $("#mentor-search").val().trim();

//         // Make an AJAX get request to our api, including the user's mentor in the url
//         $.get("/api/mentor/" + mentorSearched, function (data) {

//             // Log the data to the console
//             console.log(data);
//             // Call our renderNames function to add our names to the page
//             renderMentors(data);

//         });

//     });

//     // When user hits the name-search-btn
//     $("#name-search-btn").on("click", function () {

//         // Save the name they typed into the name-search input
//         var nameSearched = $("#name-search").val().trim();

//         // Make an AJAX get request to our api, including the user's mentor name in the url
//         $.get("/api/name/" + nameSearched, function (data) {

//             // Log the data to the console
//             console.log(data);
//             // Call our renderNames function to add our names to the page
//             renderNames(data);

//         });

//     });

//     // When user hits the email-search-btn
//     $("#email-search-btn").on("click", function () {

//         // Save the email they typed into the email-search input
//         var emailSearched = $("#email-search").val().trim();

//         // Make an AJAX get request to our api, including the user's mentor email in the url
//         $.get("/api/email/" + emailSearched, function (data) {

//             // Log the data to the console
//             console.log(data);
//             // Call our renderEmails function to add our emails to the page
//             renderEmails(data);

//         });

//     });

//     // When user hits the photo-search-btn
//     $("#photo-search-btn").on("click", function () {

//         // Save the photo they typed into the photo-search input
//         var photoSearched = $("#photo-search").val().trim();

//         // Make an AJAX get request to our api, including the user's mentor photo in the url
//         $.get("/api/photo/" + photoSearched, function (data) {

//             console.log(data);
//             // Call our renderPhotos function to add our photos to the page
//             renderPhotos(data);

//         });
//     });


//     function renderMentors(data) {
//         if (data.length !== 0) {

//             $("#stats").empty();
//             $("#stats").show();

//             for (var i = 0; i < data.length; i++) {

//                 var div = $("<div>");

//                 div.append("<h2>" + data[i].title + "</h2>");
//                 div.append("<p>name: " + data[i].name + "</p>");
//                 div.append("<p>email: " + data[i].email + "</p>");
//                 div.append("<p>photo: " + data[i].photo + "</p>");
//                 div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE MENTOR</button>");

//                 $("#stats").append(div);

//             }

//             $(".delete").click(function () {

//                 var info = {
//                     id: $(this).attr("data-id")
//                 };

//                 $.post("/api/delete", info)
//                     // On success, run the following code
//                     .then(function (delData) {
//                         // Log the data we found
//                         console.log(delData);
//                         console.log("Deleted Successfully!");
//                     });

//                 $(this).closest("div").remove();

//             });

//         });

