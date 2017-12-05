$( document ).ready(function() {

// # EATSTREET API

var cuisineChoice = [];
var cuisineMethod = [];
      
$("#submit").on("click", function(event) {
        
event.preventDefault();
 
// Question 1.
var queryTerm = $("input[name=gridRadios]:checked").val();
console.log(queryTerm);

if (queryTerm==="option1") {
console.log ("China");
var cuisineUser = "Chinese";
(cuisineChoice).push(cuisineUser);
          
}
        
if (queryTerm==="option2") {
console.log ("Italian");
var cuisineUser = "Italian";
(cuisineChoice).push(cuisineUser);
}
         
if (queryTerm==="option3") {
console.log ("Indian");
var cuisineUser = "Indian";
(cuisineChoice).push(cuisineUser);
            
}
if (queryTerm==="option4") {
         
var cuisineUser = " ";
(cuisineChoice).push(cuisineUser);
}
        

console.log(cuisineChoice);


// Question 2.
var queryTerm2 = $("input[name=gridRadiosNew]:checked").val();
console.log(queryTerm2);

if (queryTerm2==="option1") {
console.log ("pickup");
var cuisineMeth = "pickup";
(cuisineMethod).push(cuisineMeth);
          
}

if (queryTerm2==="option2") {
console.log ("noPickup");
var cuisineMeth = ("both");
(cuisineMethod).push(cuisineMeth);
}


// Eatstreet AJAX call.

var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=" + cuisineMethod[0] + "&search=" + cuisineChoice[0] + "&street-address=atlanta&access-token=f758c64bc1106d0d"  
    
$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
 
console.log(response);
var i=results.restaurants.length;
console.log(i);
var random = Math.floor(Math.random()*(i))
console.log(random);
    
 

// DOM.

var restaurantName = $("<h1>").text(results.restaurants[random].name);

var restaurantLink = $("<a>");
restaurantLink.attr("href", results.restaurants[random].url).append("click here to see website");

var restaurantPic = $("<img>")
restaurantPic.addClass("image");
restaurantPic.attr("src", results.restaurants[random].logoUrl);


$("#restaurants-view").empty();
$("#restaurants-view").append(restaurantName);
$("#restaurants-view").append(restaurantLink);
$("#restaurants-view").append(restaurantPic);

}); //closes AJAX call. 

}); // Closes click function.

























// # EDAMAM API 

//Let's stay in and cook! 
//1. Where would you rather go on a vacation? -----> New Orleans, NYC, New England, New Mexico
//2. Feeling lazy or feeling adventurous?
//3. On a diet?




americanFood = [];
lazy = [];
diet = [];


queryUrl = "https://api.edamam.com/search?q=" + foodChoice +  "&app_id=641d509e&app_key=1bf7c6fa834ae65103997be33a7be076"



$.ajax ({
 url: queryUrl,
 method: "GET"

}).done(function(res) {

console.log(res);

}); // closes done









 
}); // closes document ready