$(document).ready(function () {

  // array of Topics
var topics = ["Kim Kardashian", "Clapback", "bts", "flossing", "aoc"];

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

$("button").on("click", function() {
  var topic = $(this).attr("gif-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=18XzYcs4C3bA4uNc8XTNW0vmhDkdze5v&limit=10";

})







});