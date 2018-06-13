// Make a get request to our api route that will return every mentor 
$.get("/api/all", function (data) {

  // For each mentor that our server sends us back
  for (var i = 0; i < data.length; i++) {

    // Create a parent div to hold mentor data
    var mentorlistSection = $("<div>");

    // Add a class to this div: 'mentorlist'
    mentorlistSection.addClass("mentorlist");

    // Add an id to mentorlist to mark which mentor it is
    mentorslistSection.attr("id", "mentor-mentorlist" + i);

    // Append mentorlist to mentorlist section
    $("#mentorlist-section").append(mentorlistSection);

    // Now  we add our mentor data to the mentorlist we just placed on the page
    $("#mentor-mentorlist-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#mentor-mentorlist-" + i).append("<h3>Name: " + data[i].name + "</h4>");
    $("#mentor-mentorlist-" + i).append("<h3>Email: " + data[i].email + "</h4>");
    $("#mentor-mentorlist-" + i).append("<h3>Photo: " + data[i].photo + "</h4>");
  }
});