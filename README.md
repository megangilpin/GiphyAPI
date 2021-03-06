# GiphyAPI 	:clapper:
 https://megangilpin.github.io/GiphyAPI/

 ![Giphy Demo](demo/giphyapimedium.gif)

## Overview

References the Giphy API then dynmically displays the gifs on the page. 

## Functionality Breakdown

Click on any topic buttons at the top of the page to see a list of gifs relating to that topic appear.  Click a gif to see it start playing, click again to stop the gif. 

Add new topic buttons by entering your topic of choice into the input box and hitting the "Okuuurr!" button.

## Technology Used
- AJAX
- JavaScript
- JQuery
- Bootstrap
- HTML

## Technical Approach

1. Became familiar with the Giphy API
   1. Aquire a key to accaess their API data
   1. Undertand the call parameters for the Giphy API
   1. Familarize with the resulting JSON when making a call to the Giphy API
1. Created an array of initial "topics" call topics
1. Made a function will take in the topics array and dynmically display the strings in the array as buttons on the page.
1. Created an event handler that will do the following on button click:
   1. Make an ajax call to the Giphy API suing the buttons attribute as the search paramater
   1. Dynmically displays the resulting gifs and their ratings onto the page
   1. Ensure gifs wont' play unless clicked by assigning them the "data-state" of "still"
1. Built a funciton that will play the gif depending on the "data-state"
   1. If the "data-state" is "still" then the gif "scr" is set to animate and the "data-state" is changed to "animate"
   1. Else the "data-state" is not "still" then the gif "scr" is set to still and the "data-state" is changed to "still"
1. Add an event handler for the play gif funciton
1. Add a second event handler that will take a search term form an input form and dynmically display it next to the inital search terms  add on page load
1. Used HTML, CSS and Bootstrap to create a page to dipslay all buttons and gifs to the user. 

