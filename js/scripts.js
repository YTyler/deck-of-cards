
$(document).ready(function(){
  var types = ['clubs', 'diamonds', 'spades', 'hearts'];
  var numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];


  var deck = types.map(function(type){
    return numbers.map(function(number){
      // console.log(number.concat(' of ' + type))
      return (number + ' of ' + type)
    });
  });
  console.log(deck);
});
