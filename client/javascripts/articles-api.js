// jshint esversion: 6

let main = function(){
/*
    let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    let flickrTag = $("input").???();
    */
    let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

    //clear old photos
  //  $(".photos").???("");

  $.getJSON(requestURL, function(response) {
    let firstArticle = response[0];
    console.log(`Article ${firstArticle.id}
    Title: ${firstArticle.title}
    Content: $(firstArticle.Content}`);

      response.forEach(function(item,index) {
        let newDiv = document.createElement("div");
        document.querySelector(".b").appendChild(newDiv);

        let header = document.createElement("h3");
        header.textContent = `Article ${item.id}`;
        newDiv.appendChild(header);

        let title = document.createElement("p");
        title.textContent = item.title;
        newDiv.appendChild(title);

        let content = document.createElement("p");
        content.textContent = item.content;
        newDiv.appendChild(content);

    /*
    flickrResponse.items.forEach(function(item, index) {

      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
*/
    });

  });
};


$(document).ready(main);
