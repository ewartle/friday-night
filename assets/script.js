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


// //lazy
// //adventurous


americanFood = [];
lazy = [];
diet = [];

$("#submit3").on("click", function(event) {

event.preventDefault();
 
// Question 1.
var questionOne = $("input[name=gridRadios]:checked").val();

if ( questionOne === "option1" ) {
console.log ("NYC");
var cityChoice = "pizza";
(americanFood).push(cityChoice);
          
}
        
if (questionOne ==="option2") {
console.log ("NO");
var cityChoice = "gumbo";
(americanFood).push(cityChoice);
}
         
if (questionOne==="option3") {
console.log ("NE");
var cityChoice = "new england clam chowder";
(americanFood).push(cityChoice);
            
}
if (questionOne==="option4") {
console.log("NM")        
var cityChoice = "tacos";
(americanFood).push(cityChoice);
}

// Question 2.
var questionTwo = $("input[name=gridRadiosNew]:checked").val();

if (questionTwo==="option1") {
console.log ("lazy");
var lazyChoice = "&ingr=9";
(lazy).push(lazyChoice);
          
}

if (questionTwo==="option2") {
console.log ("adventurous");
var lazyChoice = "&ingr=50";
(lazy).push(lazyChoice);
}
        
// Question 3.
var questionThree = $("input[name=gridRadiosNew2]:checked").val();

if (questionThree==="option1") {
console.log ("diet");
var onaDiet = "&calories=lte%300";
(diet).push(onaDiet);
          
}

if (questionThree==="option2") {
console.log ("not on a diet");
var onaDiet = "&calories=gte%800";
(diet).push(onaDiet);
}
       


queryUrl = "https://api.edamam.com/search?q=" + americanFood[0] + lazy[0] + diet[0] + "&app_id=641d509e&app_key=1bf7c6fa834ae65103997be33a7be076"



$.ajax ({
 url: queryUrl,
 method: "GET"

}).done(function(res) {





console.log(res);

}); // closes done








}); // Closes click handler. 













 
}); // closes document ready