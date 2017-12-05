$(document).ready(function() {

makeitflash();


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
        makeitflash();
    }

 












}); // closes document ready