$(document).ready(function(){
  var types = ['clubs', 'diamonds', 'spades', 'hearts']
  var numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

  types.forEach(function(type){
    numbers.forEach(function(number){
    var deck = number + ' of ' + type;
    console.log(deck)
    });
  });
});
