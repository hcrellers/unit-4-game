$(document).ready(function () {
    console.log("ready!")
    $('.winner').hide();
    $('.loser').hide();

});

$(document).click(function () {
    console.log("music!")
    $('#audio')[0].play();

});

var targetNumber = Math.floor(Math.random() * 102 + 19);
$('#generated-number').html(targetNumber);

var am = Math.floor(Math.random() * 12 + 1);
var em = Math.floor(Math.random() * 12 + 1);
var ru = Math.floor(Math.random() * 12 + 1);
var di = Math.floor(Math.random() * 12 + 1);
//var winnerArray = ["winner.gif", "winner1.gif", "winner2.gif", "winner3.gif"];
//var loserArray = ["loser.gif", "loser1.gif", "loser2.gif", "loser3.gif"];

var gemTotal = 0;
var wins = 0;
var losses = 0;


//randomW = winnerArray[Math.floor(Math.random() * winnerArray.length)];
//console.log(winnerArray);

//randomL = loserArray[Math.floor(Math.random() * loserArray.length)];
//console.log(winnerArray);

$('#wins').html(wins);
$('#losses').html(losses);


function reset() {

    gemTotal = 0;
    targetNumber = [];

    targetNumber = Math.floor(Math.random() * 102 + 19);

    $('#generated-number').html(targetNumber);

    am = Math.floor(Math.random() * 12 + 1);
    em = Math.floor(Math.random() * 12 + 1);
    ru = Math.floor(Math.random() * 12 + 1);
    di = Math.floor(Math.random() * 12 + 1);

    $('#total-score').html(gemTotal);
    $('#audio')[0].play();

    if (gemTotal == targetNumber) {
        winner();
    }
    else if (gemTotal > targetNumber) {
        loser();
    }

} reset();

function winner() {
    $("#game-message").html("You won!")
    wins++;
    $('#wins').html(wins);
    $(".winner").show();
    $(".loser").hide();
    reset();
    

}


function loser() {
    $("#game-message").html("You lost!")
    losses++;
    $('#losses').html(losses)
    $(".loser").show();
    $(".winner").hide();
    reset();

}


$('#image1').click(function () {

    gemTotal = gemTotal + am;
    $('#total-score').html(gemTotal);

    if (gemTotal == targetNumber) {
        winner();
    }
    else if (gemTotal > targetNumber) {
        loser();
    }
})

$('#image2').click(function () {

    gemTotal = gemTotal + em;
    $('#total-score').html(gemTotal);
    
    if (gemTotal == targetNumber) {
        winner();
    }
    else if (gemTotal > targetNumber) {
        loser();
    }
})
$('#image3').click(function () {

    gemTotal = gemTotal + ru;
    $('#total-score').html(gemTotal);

    if (gemTotal == targetNumber) {
        winner();
    }
    else if (gemTotal > targetNumber) {
        loser();
    }
})
$('#image4').click(function () {

    gemTotal = gemTotal + di;
    $('#total-score').html(gemTotal);

    if (gemTotal == targetNumber) {
        winner();
    }
    else if (gemTotal > targetNumber) {
        loser();
    }
});




