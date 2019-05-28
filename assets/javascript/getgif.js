$(document).ready(function () {

  // array of Topics
var topics = ["KimKardashian", "Clapback", "bts", "flossing", "aoc"];

// Renders index of an array into a button
function renderGifButton(array){

  $("#gif-buttons").empty();

  for (var i = 0; i < array.length; i++){

    var gifTopic = $("<button>");
    
    gifTopic.addClass("gif-btn btn btn-secondary mx-1");

    gifTopic.attr("gif-name", array[i]);

    gifTopic.text(array[i]);

    $("#gif-buttons").append(gifTopic);
  }
}

renderGifButton(topics);

// on button click searches Giphy API with topic words and dynamically adds gifs to page
$("button").on("click", function() {

  $("#gifs-appear-here").empty();
  
  var topic = $(this).attr("gif-name");
  console.log(topic);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=18XzYcs4C3bA4uNc8XTNW0vmhDkdze5v&limit=10";
    console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response){
      console.log("queryURL:  " + queryURL)
      
      var results = response.data;
      console.log(results);

      for(var i = 0; i < results.length; i++){
        var gifDiv = $("<div>");
        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url)
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");

        gifDiv.append(p);
        gifDiv.append(gifImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});




})