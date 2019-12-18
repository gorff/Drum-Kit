var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButtons; i++) // selects all elements with class drum and loops over that length
{
  document.querySelectorAll("button")[i].addEventListener("click", function() { //anonymous function
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); //this may be an issue

});
}
document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);  //this may be an issue
});

function playSound(letter){
  switch (letter) {
    case "w":
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
      case "a":
      var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
      break;
      case "s":
      var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
      break;
      case "d":
      var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
      break;
      case "j":
      var snare = new Audio('./sounds/snare.mp3');
        snare.play();
      break;
      case "k":
      var crash = new Audio('./sounds/crash.mp3');
        crash.play();
      break;
      case "l":
      var kickbass = new Audio('./sounds/kick-bass.mp3');
        kickbass.play();
      break;
    default: console.log(buttonInnerHTML) // logs an exception for a broken buttonInnerHTML
  }
}
function buttonAnimation()
{
  var activeButton = document.querySelector('.'+currentKey);
  activeButton.addClass('pressed');
}
