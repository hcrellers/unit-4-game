$(document).ready(function() {
    console.log("ready!")
   
});

$(document).click(function() {
    console.log("music!")
    $('#audio')[0].play();
});

var targetNumber = 1 + Math.floor(Math.random() * 120);
$('#generated-number').text(targetNumber);

var counter = 0;
var gemNum = [1,2,3,4,5,6,7,8,9,10,11,12];
var gems = $('.gems');
var wins = 0;
var losses = 0;

$( "#image1" ).click(function() {
    var am = Math.floor(Math.random() * gemNum.length);
    $('#total-score').text(am);
  });

  $( "#image2" ).click(function() {
    var am = Math.floor(Math.random() * gemNum.length);
    $('#total-score').text(am);
  });

  $( "#image3" ).click(function() {
    var am = Math.floor(Math.random() * gemNum.length);
    $('#total-score').text(am);
  });

  $( "#image4" ).click(function() {
    var am = Math.floor(Math.random() * gemNum.length);
    $('#total-score').text(am);
  });