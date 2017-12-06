$(document).ready(function() {

    makeitflash();


    $("#letsgo").on("click", function(event) {

        stage4();

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
        }
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
    $(document).on("click", "#outside", function(event) {
        // stageThreeOutside();
        console.log("outside click");
    });

    $(document).on("click", "#inside", function(event) {
        // stageThreeInside();
        console.log("inside click");
    });


    function makeitflash() {
        for (var i = 0; i < 5; i++) {
            $("#generateflash").fadeOut(500);
            $("#generateflash").fadeIn(500);
        }
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
        makeitflash();


    }


    var insideActivityArray = [
        { "name": "binge", "url": "assets/images/binge.jpg" },
        { "name": "bubble", "url": "assets/images/bubble.jpg" },
        { "name": "cards", "url": "assets/images/cards.jpg" },
        { "name": "firepit", "url": "assets/images/firepit.jpg" },
        { "name": "friends", "url": "assets/images/friends.jpg" },
        { "name": "games", "url": "assets/images/games.jpg" },
        { "name": "limbo", "url": "assets/images/limbo.jpg" },
        { "name": "netflix", "url": "assets/images/netflix.jpg" },
        { "name": "video", "url": "assets/images/video.jpg" }
    ];

    var outsideActivityArray = [
        { "name": "band", "url": "assets/images/band.jpg" },
        { "name": "bowling", "url": "assets/images/bowling.jpg" },
        { "name": "dancing", "url": "assets/images/dancing.jpg" },
        { "name": "elevator", "url": "assets/images/elevator.jpg" },
        { "name": "gunrange", "url": "assets/images/gunrange.jpg" },
        { "name": "minigolf", "url": "assets/images/minigolf.jpg" },
        { "name": "movie", "url": "assets/images/movie.jpg" },
        { "name": "rockwall", "url": "assets/images/rockwall.jpg" },
        { "name": "sports", "url": "assets/images/sports.jpg" }
    ];

    function stage5() {
        $("#dynamicdiv").empty();

        // test to make sure all images load
        // for (var i = 0; i < insideActivityArray.length; i++) {
            // var activity = $("<img>").attr("src", insideActivityArray[i].url);
            // $("#dynamicdiv").append(activity);
        // }
    }


function stage6() {
	// look at materialize carousel for scrolling through saved experiences
}









}); // closes document ready