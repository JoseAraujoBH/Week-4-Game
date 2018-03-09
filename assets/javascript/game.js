// Global Variables

var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {


        // Empties Crystal Amount on reset
        $(".crystals").empty();

        var images = [
            'https://vignette.wikia.nocookie.net/steven-universe/images/b/b1/PDGemByJirachi23.png/revision/latest?cb=20180106025637', 
            'https://vignette.wikia.nocookie.net/steven-universe/images/e/e8/Blue_Diamond_Gem.png/revision/latest?cb=20170105124442', 
            'https://vignette.wikia.nocookie.net/steven-universe/images/e/e3/YellowDiamondGemstoneByJirachi23.png/revision/latest?cb=20171008193140', 
            'https://vignette.wikia.nocookie.net/steven-universe-roleplay/images/f/f0/Purple_Diamond.png/revision/latest?cb=20150620113035'];

        // Generates a random number
        randomResult = Math.floor(Math.random() * 90) +30;

        console.log(randomResult);

        $("#result").html('Target Number: ' + randomResult);

        for (var i = 0; i < 4; i++){

            var random = Math.floor(Math.random() * 11) +1;

            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random": random
                });

                crystal.css({
                    "background-image":"url('" + images[i] + "')",
                    "background-size":"cover"
                });



                // Shows Random Number on Crystal
                // >>>>>>>>>>> crystal.html(random); <<<<<<<<<<<

            $(".crystals").append(crystal);
        }

        $("#previous").html("Total Score: " + previous);

    }



resetAndStart();

// Event Delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > randomResult){
        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        resetAndStart();

    }

    else if(previous === randomResult){
        win++;

        $("#win").html("You Won: " + win);

        previous = 0;

        resetAndStart();

    }

});