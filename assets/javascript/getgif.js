$(document).ready(function () {

  // array of Topics
var topics = ["Kim Kardashian", "Clapback", "bts", "flossing", "aoc"];

// Renders index of an array into a button
function renderGifButton(array){

  $("#gif-buttons").empty();
  
  for (var i = 0; i < array.length; i++){

    var gifTopic = $("<button>");
    gifTopic.addClass("gif-btn btn mx-1 my-1");
    gifTopic.attr("gif-name", array[i]);
    gifTopic.text(array[i]);

    $("#gif-buttons").append(gifTopic);
  }
}

renderGifButton(topics);

// on button click searches Giphy API with topic words and dynamically adds gifs to page
function displayGif() {

  $("#gifs-appear-here").empty();
  
  var topic = $(this).attr("gif-name").trim();
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
        gifDiv.addClass("my-2");
        
        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);
        p.addClass("my-1");

        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url)
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");
        gifImage.addClass("gif mb-4");

        gifDiv.append(p);
        gifDiv.append(gifImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
};

$("#add-gif").on("click", function (event) {
  event.preventDefault();
    // This line grabs the input from the textbox
  var gif = $("#gif-input").val().trim();
  $("#gif-input").val("");
    // Adding topic from the textbox to our array
  topics.push(gif);

    // Calling renderGifButtons which handles the processing of our topics array
  renderGifButton(topics);
});

// function that plays the gif then stops the gif
function playGif() {
  event.preventDefault();
  
  // variable of the data-state of the gif that was clicked that will be referenced to change the displayed gif to the one that is not still
  var state = $(this).attr("data-state");
  console.log(state);

  // if/then statement that says if the data-sate is still then change the displayed gif to the one is not still and change the data-state attribute to be "animate", else statement says if the data-state is animate then change the gif displayed to be the still gif.
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
};

// listens for a click on the gif that will run the function to play the function
$(document).on("click", ".gif", playGif);

// listens for a click on the gif-btns that will run the function to call the ajax
$(document).on("click", ".gif-btn", displayGif);

})