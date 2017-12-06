$(document).ready(function() {

//These search terms are here because I need to be able to access across functions.
  var restaurantName = " ";
  var restaurantLink = " ";
  var restaurantPic = " ";               

  $("#letsgo").on("click", function(event) {

       stage2();
    })

    function stage2() {
        $("#dynamicdiv").empty();

        var column = $("<div class='col-md-12' id='stage2div'>");
        $("#dynamicdiv").append(column);
        var question = $("<p>Would you rather....</p>");
        $("#stage2div").append(question);

        var outside = {
            name: "out",
            image: "assets/images/beach.jpg"
        };
        var inside = {
            name: "in",
            image: "assets/images/fire.jpg",
        };

        var outsideDiv = $("<div class='float'>");
        var outsideImage = $("<img>").attr("src", outside.image);
        $(outsideImage).attr("id", "outside");
        $(outsideDiv).append(outsideImage);
        $(outsideDiv).append("<p>" + "take a long walk on the beach");
        var or = $("<p class='float padding'>" + " OR " + "</p>")

        var insideDiv = $("<div class='float'>");
        var insideImage = $("<img>").attr("src", inside.image);
        $(insideImage).attr("id", "inside");
        $(insideDiv).append(insideImage);
        $(insideDiv).append("<p>" + "sit by a cozy fire");

        $("#stage2div").append(outsideDiv);
        $("#stage2div").append(or);
        $("#stage2div").append(insideDiv);

    }
     

  //This is the function to dynamically create elements for stageThreeOutside
  $(document).on("click", "#outside", function(event) {
       
        $("#dynamicdiv").empty();
       
        var formMethod = $("<div class = 'container' id='container2'><div class='BoxIndex'><fieldset class = 'form-group row'><p class='stage3P'>Are you always running?</p><img class='cities' id='run' src= 'assets/images/run.PNG' alt='Photo of running'><div class='col-sm-10><div class = 'form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios1' value='option1'> Yes </input><div class='form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios2' value='option2'> No </input>");
        var submit = $("<div class = 'container' id='container3'><div class='BoxIndex'><div class='form-group row'><div class='col-sm-10'><button type='submit' class='btn btn-primary' id='submit2'>Submit</button>"); 
        var formCuisine =$("<div class = 'container' id='container1'><div class='BoxIndex'><fieldset class='form-group'><div class='row'><p class='stage3P'> What country do you want to visit? </p><div class='col-sm-10><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios1' value='option1'>China</input><img class= 'cities' id='China' src= 'assets/images/China.JPEG' alt='Photo of china'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios2' value='option2'>Italy</input> <img class= 'cities' id='Italy' src= 'assets/images/italy.JPEG' alt='Photo of italy'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios3' value='option3'>India </input><img class= 'cities' id='India' src= 'assets/images/india.JPEG' alt='Photo of india'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios4' value='option4'>Anywhere in the world </input><img class= 'cities' id='anywhere' src= 'assets/images/globe.PNG' alt='Photo of globe'>");  
 

                    $("#dynamicdiv").append(formCuisine);   
                    $("#dynamicdiv").append(formMethod);   
                    $("#dynamicdiv").append(submit);
  });

   
 //This is the function to dynamically create elements for stageThreeOutside
  $(document).on("click", "#inside", function(event) {
        
        $("#dynamicdiv").empty();
        var formFeeling = $("<div class = 'container' id='container2'><div class='BoxIndex'><fieldset class = 'form-group row'><p class='stage3P'>How are you feeling?</p><div class='col-sm-10><div class = 'form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios1' value='option1'> Lazy </input><div class='form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios2' value='option2'> Adventurous </input>");
        var formDiet = $("<div class = 'container' id='container2'><div class='BoxIndex'><fieldset class = 'form-group row'><p class='stage3P'>Are you on a diet?</p><div class='col-sm-10><div class = 'form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios1' value='option1'> Yes </input><div class='form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios2' value='option2'> No </input>");
        var submit =("<div class = 'container' id='container3'><div class='BoxIndex'><div class='form-group row'><div class='col-sm-10'><button type='submit' class='btn btn-primary' id='submit3'>Submit</button>"); 
        var formCuisine =$("<div class = 'container' id='container1'><div class='BoxIndex'><fieldset class='form-group'><div class='row'><p class='stage3P'> Where do you want to visit?</p><div class='col-sm-10><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios1' value='option1'>New Orleans</input><img class= 'cities' id='NewOrleans' src= 'assets/images/#.JPEG' alt='Photo of china'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios2' value='option2'>New York City</input> <img class= 'cities' id='NYC' src= 'assets/images/#.JPEG' alt='Photo of New York City'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios3' value='option3'> New England </input><img class= 'cities' id='NewEngland' src= 'assets/images/#.JPEG' alt='Photo of New England'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios4' value='option4'>New Mexico </input><img class= 'cities' id='NewMexico' src= 'assets/images/#.PNG' alt='Photo of New Mexico'>");  

                   $("#dynamicdiv").html(formCuisine);   
                   $("#dynamicdiv").append(formFeeling);
                   $("#dynamicdiv").append(formDiet);
                   $("#dynamicdiv").append(submit);
  });


  function makeitflash() {
        $("#generateflash").fadeOut(500);
        $("#generateflash").fadeIn(500);
  }

  function stage4() {
        $("#dynamicdiv").empty();
        var column = $("<div class='col-md-12' id='stage4div'>");
        $("#dynamicdiv").append(column);
        var suspenseImage = $("<img>").attr("src", "assets/images/roulettespin.gif");
        $(suspenseImage).attr("id", "suspense");
        $(stage4div).append(suspenseImage);
        var generateLogo = $("<div id='generateflash'>");
        $(generateLogo).text("Generating Experience");
        $(stage4div).append(generateLogo);
        
        //I added below to see if we could trigger the final phase.  We will need to think of a way to trigger
//         var submit =("<div class=BoxIndex><div class='form-group row'><div class='col-sm-10'><button type='submit' class='btn btn-primary' id='submit4'>Submit</button>"); 
//         $(stage4div).append(submit);
        
        makeitflash();
  }

 
    //This is the function generating the outside experience after userInput.  This function is triggered by a click event that appears in stage 3.
		
  $(document).on("click", "#submit2", function nextPhaseOutside5(){
    
      generateOutside();
      stage4()
    
  });   

  //This is the function generating the inside experience after userInput.  This function is triggered by a click event that appears in stage 3.   
          
  $(document).on("click", "#submit3", function nextPhaseInside5(){
   
      generateInside();
      stage4()
   
  }); 

 
  function generateOutside(){
        
          var cuisineChoice = [];
          var cuisineMethod = [];

          var queryTerm = $("input[name=gridRadios]:checked").val();
          

        if (queryTerm==="option1") {
          
          var cuisineUser = "Chinese";
          (cuisineChoice).push(cuisineUser);
          
        }
        if (queryTerm==="option2") {
          
          var cuisineUser = "Italian";
          (cuisineChoice).push(cuisineUser);
        }
         if (queryTerm==="option3") {
          
          var cuisineUser = "Indian";
          (cuisineChoice).push(cuisineUser);
            
        }
         if (queryTerm==="option4") {
         
          var cuisineUser = " ";
          (cuisineChoice).push(cuisineUser);
        }
        

      
        var queryTerm2 = $("input[name=gridRadiosNew]:checked").val();
        console.log(queryTerm2);

         if (queryTerm2==="option1") {
         
          var cuisineMeth = "pickup";
          (cuisineMethod).push(cuisineMeth);
          
        }

        if (queryTerm2==="option2") {
          
          var cuisineMeth = ("both");
          (cuisineMethod).push(cuisineMeth);
        }


          var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=" + cuisineMethod[0] + "&search=" + cuisineChoice[0] + "&street-address=atlanta&access-token=f758c64bc1106d0d"  
                  
          $.ajax({
                url: queryURL,
                method: "GET"
          }).done(function(response) {

             var results =response 
             console.log(results);
             var i=results.restaurants.length;
             var random = Math.floor(Math.random()*(i))
     

      	      restaurantName = $("<p id='resultName'>").text(results.restaurants[random].name);
              restaurantPic = $("<img id='restaurantImg'>")
                  restaurantPic.addClass("image");
                  restaurantPic.attr("src", results.restaurants[random].logoUrl);
      	      restaurantLink = $("<a>");
      	          restaurantLink.attr("href", results.restaurants[random].url).append("Website");
      	       
      	});
 }

}); // closes document ready