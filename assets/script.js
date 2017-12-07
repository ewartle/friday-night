$(document).ready(function() {


    //These search terms are here because I need to be able to access across functions.
    var restaurantName = " ";
    var restaurantLink = " ";
    var restaurantPic = " ";
    var randomActivity = " ";
    var restaurantName2 = " ";
    var pickupDineIn = " ";
    var cuisineChoice = [];
    var cuisineMethod = [];
    var results;
    var random;
    var table;
    var outsideOrInside = "";
    var recipeName = ""
    var recipePic = ""
    var recipeLink = ""

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
        var outsideImage = $("<img class='insideOutside'>").attr("src", outside.image);
        $(outsideImage).attr("id", "outside");
        $(outsideDiv).append(outsideImage);
        $(outsideDiv).append("<p>" + "take a long walk on the beach");
        var or = $("<p class='float padding'>" + " OR " + "</p>")

        var insideDiv = $("<div class='float'>");
        var insideImage = $("<img class='insideOutside'>").attr("src", inside.image);
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

        outsideOrInside = "outside";
        var formMethod = $("<div id='container2'><div class='BoxIndex'><fieldset class = 'form-group row'><p class='stage3P'>Are you always running?</p><img class='cities' id='run' src= 'assets/images/run.PNG' alt='Photo of running'><div class='col-md-12><div class = 'form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios1' value='option1'> Yes </input><div class='form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios2' value='option2'> No </input>");
        var submit = $("<div id='container3'><div class='BoxIndex'><div class='form-group row'><div class='col-md-12'><button type='submit' class='btn btn-primary' id='submit2'>Submit</button>");
        var formCuisine = $("<div id='container1'><div class='BoxIndex'><fieldset class='form-group'><div class='row'><p class='stage3P'> What country do you want to visit? </p><div class='col-md-12><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios1' value='option1'>China</input><img class= 'cities' id='China' src= 'assets/images/China.JPEG' alt='Photo of china'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios2' value='option2'>Italy</input> <img class= 'cities' id='Italy' src= 'assets/images/italy.JPEG' alt='Photo of italy'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios3' value='option3'>India </input><img class= 'cities' id='India' src= 'assets/images/india.JPEG' alt='Photo of india'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios4' value='option4'>Anywhere in the world </input><img class= 'cities' id='anywhere' src= 'assets/images/globe.PNG' alt='Photo of globe'>");

        $("#dynamicdiv").append(formCuisine);
        $("#dynamicdiv").append(formMethod);
        $("#dynamicdiv").append(submit);
    });

    function makeitflash() {
        for (var i = 0; i < 4; i++) {
            $("#generateflash").fadeOut(500);
            $("#generateflash").fadeIn(500);
        }

    }



    //This is the function to dynamically create elements for stageThreeOutside
    $(document).on("click", "#inside", function(event) {

        $("#dynamicdiv").empty();

        outsideOrInside = "inside";
        var formFeeling = $("<div id='container2'><div class='BoxIndex'><fieldset class = 'form-group row'><p class='stage3P'>How are you feeling?</p><div class='col-md-12><div class = 'form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios1' value='option1'> Lazy </input><div class='form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios2' value='option2'> Adventurous </input><img class='cities' id='feeling' src='assets/images/adventurous.jpg' alt='chef preparing a meal'");
        var formDiet = $("<div id='container2'><div class='BoxIndex'><fieldset class = 'form-group row'><p class='stage3P'>Are you on a diet?</p><div class='col-md-12><div class = 'form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew2' id='gridRadios1' value='option1'> Yes </input><div class='form-check'><label id='method' class='form-check-label'><input class='form-check-input' type='radio' name='gridRadiosNew' id='gridRadios2' value='option2'> No </input><img class='cities' id='diet' src='assets/images/diet.jpg' alt= 'man on a diet'>");
        var submit = ("<div id='container3'><div class='BoxIndex'><div class='form-group row'><div class='col-md-12'><button type='submit' class='btn btn-primary' id='submit3'>Submit</button>");
        var formCuisine = $("<div id='container1'><div class='BoxIndex'><fieldset class='form-group'><div class='row'><p class='stage3P'> Where do you want to visit?</p><div class='col-md-12><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios1' value='option1'>New Orleans</input><img class= 'cities' id='NewOrleans' src= 'assets/images/nola.jpg' alt='Photo of New Orleans'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios2' value='option2'>New York City</input> <img class= 'cities' id='NYC' src= 'assets/images/nyc.jpg' alt='Photo of New York City'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios3' value='option3'> New England </input><img class= 'cities' id='NewEngland' src= 'assets/images/new-england.jpg' alt='Photo of New England'><div class ='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='gridRadios' id='gridRadios4' value='option4'>New Mexico </input><img class= 'cities' id='NewMexico' src= 'assets/images/new-mexico.jpg' alt='Photo of New Mexico'>");


        $("#dynamicdiv").html(formCuisine);
        $("#dynamicdiv").append(formFeeling);
        $("#dynamicdiv").append(formDiet);
        $("#dynamicdiv").append(submit);
    });



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
        //         var submit =("<div class=BoxIndex><div class='form-group row'><div class='col-md-12'><button type='submit' class='btn btn-primary' id='submit4'>Submit</button>"); 
        //         $(stage4div).append(submit);

        makeitflash();

        if (outsideOrInside === "outside") {
            setTimeout(stage5Out, 4000);
        } else {
            setTimeout(stage5In, 4000);
        }
    }

    var insideActivityArray = [
        { "name": "Binge Watch", "url": "assets/images/binge.jpg", "desc": "binge watch your favorite TV program." },
        { "name": "Bubble Bath", "url": "assets/images/bubble.jpg", "desc": "take a relaxing bubble bath." },
        { "name": "Cards", "url": "assets/images/cards.jpg", "desc": "play your favorite game of cards." },
        { "name": "Firepit", "url": "assets/images/firepit.jpg", "desc": "make a fire and roast marshmallows." },
        { "name": "Friends", "url": "assets/images/friends.jpg", "desc": "have friends over for drinks." },
        { "name": "Board Games", "url": "assets/images/games.jpg", "desc": "play your favorite board game." },
        { "name": "Limbo", "url": "assets/images/limbo.jpg", "desc": "do the limbo." },
        { "name": "Netflix", "url": "assets/images/netflix.jpg", "desc": "watch a movie on Netflix." },
        { "name": "Video Games", "url": "assets/images/video.jpg", "desc": "play your favorite video game." }
    ];

    var outsideActivityArray = [
        { "name": "Band", "url": "assets/images/band.jpg", "desc": "watch a band at a local restarant/bar." },
        { "name": "Bowling", "url": "assets/images/bowling.jpg", "desc": "go bowling." },
        { "name": "Dancing", "url": "assets/images/dancing.jpg", "desc": "dance the night away." },
        { "name": "Elevator Fun", "url": "assets/images/elevator.jpg", "desc": "find the nearest building with an elevator, push all the buttons and RUN!" },
        { "name": "Gun Range", "url": "assets/images/gunrange.jpg", "desc": "test your skills at a gun range." },
        { "name": "Mini Golf", "url": "assets/images/minigolf.jpg", "desc": "play a round of mini golf." },
        { "name": "Movie", "url": "assets/images/movie.jpg", "desc": "go to the movies." },
        { "name": "Rock Wall", "url": "assets/images/rockwall.jpg", "desc": "go climb an indoor rock wall." },
        { "name": "Sports", "url": "assets/images/sports.jpg", "desc": "go and cheer on your local sports team." }
    ];


    //This is the function generating the outside experience after userInput.  This function is triggered by a click event that appears in stage 3.

    $(document).on("click", "#submit2", function nextPhaseOutside5() {

        generateOutside();



    });

    //This is the function generating the inside experience after userInput.  This function is triggered by a click event that appears in stage 3.   

    $(document).on("click", "#submit3", function nextPhaseInside5() {

        generateInside();


    });

    function generateOutsideActivity() {

        randomActivity = Math.floor(Math.random() * (outsideActivityArray.length));
        console.log(randomActivity);
    }


    function generateInsideActivity() {

        randomActivity = Math.floor(Math.random() * (insideActivityArray.length));
        console.log(randomActivity);

    }



    function generateOutside() {

        var cuisineChoice = [];
        var cuisineMethod = [];

        var queryTerm = $("input[name=gridRadios]:checked").val();

        if (queryTerm === "option1") {

            var cuisineUser = "Chinese";
            (cuisineChoice).push(cuisineUser);

        }
        if (queryTerm === "option2") {

            var cuisineUser = "Italian";
            (cuisineChoice).push(cuisineUser);
        }
        if (queryTerm === "option3") {

            var cuisineUser = "Indian";
            (cuisineChoice).push(cuisineUser);

        }
        if (queryTerm === "option4") {

            var cuisineUser = " ";
            (cuisineChoice).push(cuisineUser);
        }


        var queryTerm2 = $("input[name=gridRadiosNew]:checked").val();
        console.log(queryTerm2);

        if (queryTerm2 === "option1") {

            var cuisineMeth = "pickup";
            (cuisineMethod).push(cuisineMeth);
        }

        if (queryTerm2 === "option2") {

            var cuisineMeth = ("both");
            (cuisineMethod).push(cuisineMeth);
        }

        var queryURL = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=" + cuisineMethod[0] + "&search=" + cuisineChoice[0] + "&street-address=atlanta&access-token=f758c64bc1106d0d"

        if (queryTerm === "option1" || queryTerm === "option2" || queryTerm === "option3" || queryTerm === "option4") {
            var button1Checked = true
        }

        if (queryTerm2 === "option1" || queryTerm2 === "option2") {
            var button2Checked = true
        }

        if (button1Checked && button2Checked) {
            stage4();
            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {


                results = response
                console.log(results);
                var i = results.restaurants.length;
                var random = Math.floor(Math.random() * (i))

                restaurantName = $("<p id='resultName'>").text(results.restaurants[random].name);
                restaurantName2 = results.restaurants[random].name;

                restaurantPic = $("<img id='restaurantImg'>")
                restaurantPic.addClass("image");
                restaurantPic.attr("src", results.restaurants[random].logoUrl);
                restaurantLink = $("<a>");
                restaurantLink.attr("href", results.restaurants[random].url).append("Website");

            });

            generateOutsideActivity();
        } else {




            var alertdiv = $("<p id='pAlert'>You must answer every question to proceed!</p>");
            $("#container1").append(alertdiv);

            for (var i = 0; i < 1; i++) {
                $("#pAlert").fadeOut(500);
                $("#pAlert").fadeIn(500);
            }
        }


        if (button1Checked) {
            cuisineChoice.pop();
        }

        if (button2Checked) {
            cuisineMethod.pop();
        }


    }


    function generateInside() {


       
        americanFood = [];
        lazy = [];
        diet = [];

         

        // Question 1.
        var questionOne = $("input[name=gridRadios]:checked").val();


        if (questionOne === "option1") {
            console.log("NO");
            var cityChoice = "gumbo";
            (americanFood).push(cityChoice);
        }

        if (questionOne === "option2") {
            console.log("NYC");
            var cityChoice = "pizza";
            (americanFood).push(cityChoice);
        }

        if (questionOne === "option3") {
            console.log("NE");
            var cityChoice = "new%20england%20clam%20chowder";
            (americanFood).push(cityChoice);
        }

        if (questionOne === "option4") {
            console.log("NM")
            var cityChoice = "tacos";
            (americanFood).push(cityChoice);
        }

        // Question 2.
        var questionTwo = $("input[name=gridRadiosNew]:checked").val();


        if (questionTwo === "option1") {
            console.log("lazy");
            var lazyChoice = "&ingr=9";
            (lazy).push(lazyChoice);
        }

        if (questionTwo === "option2") {
            console.log("adventurous");
            var lazyChoice = "&ingr=22";
            (lazy).push(lazyChoice);
        }

        // Question 3.
        var questionThree = $("input[name=gridRadiosNew2]:checked").val();

        if (questionThree === "option1") {
            console.log("diet");
            var onaDiet = "&calories=lte300";
            (diet).push(onaDiet);
        }

        if (questionThree === "option2") {
            console.log("not on a diet");
            var onaDiet = "&calories=gte800";
            (diet).push(onaDiet);
        }

        var queryUrl = "https://api.edamam.com/search?q=" + americanFood[0] + lazy[0] + diet[0] + "&app_id=641d509e&app_key=1bf7c6fa834ae65103997be33a7be076"
        //var queryUrl = "https://api.edamam.com/search?q=pizza&ingr=5&app_id=641d509e&app_key=1bf7c6fa834ae65103997be33a7be076"


        // User validation 
        if (questionOne === "option1" || questionOne === "option2" || questionOne === "option3" || questionOne === "option4") {
            var button1Checked = true;
        }

        if (questionTwo === "option1" || questionTwo === "option2") {
            var button2Checked = true;
        }

        if (questionThree === "option1" || questionThree === "option2")
            var button3Checked = true;

        if (button1Checked && button2Checked && button3Checked) {
            stage4();

            $.ajax({
                url: queryUrl,
                method: "GET"

            }).done(function(res) {


                var random = Math.floor(Math.random() * (res.hits.length))

                console.log(res);

                //console.log(res.hits[random].recipe.label);
                //console.log(res.hits[random].recipe.image);
                //console.log(res.hits[random].recipe.url);


                recipeName = $("<p id='recipeName'>").text(res.hits[random].recipe.label);
                recipePic = $("<img id='recipeImg'>")
                recipePic.attr("src", res.hits[random].recipe.image);
                recipeLink = $("<a>");
                recipeLink.attr("href", res.hits[random].recipe.url).append("Website");

            }); // closes done

            generateInsideActivity();
        } else {

            var alertdiv = $("<p id='pAlert'>You must answer every question to proceed!</p>");
            $("#container1").append(alertdiv);

            for (var i = 0; i < 1; i++) {
                $("#pAlert").fadeOut(500);
                $("#pAlert").fadeIn(500);
            }
        }


        if (button1Checked) {
            americanFood.pop();
        }

        if (button2Checked) {
            lazy.pop();
        }

        if (button3Checked) {
            diet.pop();
        }

    }

  
    generateInsideActivity();


    function stage5Out() {

        $("#dynamicdiv").empty();
        var row1 = $("<div id='container4'><div class='BoxIndex'><div class = '<div class = row><div class ='col-md-12' id='stage5div1'>");
        var row2 = $("<div id='container5'><div class='BoxIndex'><div class = '<div class = row><div class ='col-md-12' id='stage5div2'><div class='form-group row'><button type='submit' class='btn btn-primary' id='submit5'>Give me a new experience!</button>");
        var row3 = $("<div id='container6'><div class='BoxIndex'><div class = '<div class = row><div class ='col-md-12' id='stage5div3'>");


        $("#dynamicdiv").append(row1);
        $("#dynamicdiv").append(row2);
        $("#dynamicdiv").append(row3);



        if (pickupDineIn === "pickup") {
            var text = $("<p id='stage5P'>We have a fun evening planned for you!</p>");
            var text2 = $("<p id='desc'> First, you will visit " + restaurantName2 + ".  Because you are always on the go, you will take your food to-go and enjoy at the local park.  After you finish your delicious meal, you will " + outsideActivityArray[randomActivity].desc + "  Thank you for taking a chance on a fun Friday night.  Enjoy!</p>");
        } else {
            var text = $("<p id='stage5P'>We have a fun evening planned for you!</p>");
            var text2 = $("<p id='desc'> First, you will enjoy a leisurely dinner at " + restaurantName2 + " .  After you finish your delicious meal, you will " + outsideActivityArray[randomActivity].desc + "  Thank you for taking a chance on a fun Friday night.  Enjoy!</p>");
        }

        $("#stage5div1").append(text);
        $("#stage5div1").append(text2);

        // Following Code creates the table

        table = $("<table class='table'><thead><tr><th>Restaurant & website</th><th>Activity</th><tbody id='headrow'><tr><td class='main' id='original'></td><td class='main' id='original4'></td>");


        //the following code is what puts the main variables in the table.  

        activityPic = $("<img id='activityImg'>");
        activityPic.addClass("image");
        activityPic.attr("src", outsideActivityArray[randomActivity].url);
        activityName = $("<p id='resultName'>").text(outsideActivityArray[randomActivity].name);


        $("#stage5div3").append(table);
        $("#original").append(restaurantName);
        $("#original").append(restaurantPic);
        $("#original").append(restaurantLink);
        $("#original4").append(activityName);
        $("#original4").append(activityPic);


    }

    function stage5In() {

        $("#dynamicdiv").empty();
        var row1 = $("<div id='container4'><div class='BoxIndex'><div class = '<div class = row><div class ='col-md-12' id='stage5div1'>");
        var row2 = $("<div id='container5'><div class='BoxIndex'><div class = '<div class = row><div class ='col-md-12' id='stage5div2'><div class='form-group row'><button type='submit' class='btn btn-primary' id='submit5'>Give me a new experience!</button>");
        var row3 = $("<div id='container6'><div class='BoxIndex'><div class = '<div class = row><div class ='col-md-12' id='stage5div3'>");

        $("#dynamicdiv").append(row1);
        $("#dynamicdiv").append(row2);
        $("#dynamicdiv").append(row3);

        var text = $("<p id='stage5Pin'>Let's stay in and cook!</p>");
        var text2 = $("<p id='desc-in'> First, let's cook" + recipeName + ". After you finish your delicious meal, you will " + insideActivityArray[randomActivity] + "Thank you for taking a chance on a fun Friday night.  Enjoy!</p>");

        $("#stage5div1").append(text);
        $("#stage5div1").append(text2);

        // Following Code creates the table

        table = $("<table class='table'><thead><tr><th>Restaurant & website</th><th>Activity</th><tbody id='headrow'><tr><td class='main' id='original'></td><td class='main' id='original4'></td>");


        //the following code is what puts the main variables in the table.  

        activityPic = $("<img id='activityImg'>");
        activityPic.addClass("image");
        activityPic.attr("src", insideActivityArray[randomActivity].url);
        activityName = $("<p id='resultName'>").text(insideActivityArray[randomActivity].name);


        $("#stage5div3").append(table);
        $("#original").append(recipeName);
        $("#original").append(recipePic);
        $("#original").append(recipeLink);
        $("#original4").append(activityName);
        $("#original4").append(activityPic);

    }

    $(document).on("click", "#submit5", function newExperience() {

        function addNewExperience() {
            var tableAddRow = $("<tr><td class='main' id='original'></td><td class='main' id='original4'></td>");


            generateOutsideActivity();
            activityPic = $("<img id='activityImg'>");
            activityPic.addClass("image");
            activityPic.attr("src", outsideActivityArray[randomActivity].url);
            activityName = $("<p id='resultName'>").text(outsideActivityArray[randomActivity].name);

            var random = Math.floor(Math.random() * (results.restaurants.length));

            restaurantName = $("<p id='resultName'>").text(results.restaurants[random].name);
            restaurantPic = $("<img id='restaurantImg'>")
            restaurantPic.addClass("image");
            restaurantPic.attr("src", results.restaurants[random].logoUrl);
            restaurantLink = $("<a>");
            restaurantLink.attr("href", results.restaurants[random].url).append("Website");

            $("#headrow").prepend(tableAddRow);
            $("#original").append(restaurantName);
            $("#original").append(restaurantPic);
            $("#original").append(restaurantLink);
            $("#original4").append(activityName);
            $("#original4").append(activityPic);

        }

        if (outsideOrInside === "outside") {
            addNewExperience();
        } else {

        }

    });
//

    function stage6() {
        // look at materialize carousel for scrolling through saved experiences

    }

}); // closes document ready