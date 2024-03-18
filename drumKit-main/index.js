var noOfKits=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfKits;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     /*    var audio = new Audio("Drum Kit Completed/sounds/crash.mp3");
        audio.play(); */
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
 });
}

document.addEventListener("keypress",function(event){
   // console.log(event.key);
    var char = (event.key).toUpperCase();
console.log(char);
    makeSound(char);
    buttonAnimation(char);
});

function makeSound(key){

     switch (key) {
            case "W":
                var tom1 = new Audio("Drum Kit Completed/sounds/tom-1.mp3");
                tom1.play();
                break;
            case "A":
                var tom2 = new Audio("Drum Kit Completed/sounds/tom-2.mp3");
                tom2.play();
                break;
            
              case "S":
                var tom3 = new Audio('Drum Kit Completed/sounds/tom-3.mp3');
                tom3.play();
                break;
            
              case "D":
                var tom4 = new Audio('Drum Kit Completed/sounds/tom-4.mp3');
                tom4.play();
                break;
            
              case "J":
                var snare = new Audio('Drum Kit Completed/sounds/snare.mp3');
                snare.play();
                break;
            
              case "K":
                var crash = new Audio('Drum Kit Completed/sounds/crash.mp3');
                crash.play();
                break;
            
              case "L":
                var kick = new Audio('Drum Kit Completed/sounds/kick-bass.mp3');
                kick.play();
                break;
            
            default: console.log(key);
                break;
        }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.toggle("pressed");
    },100);
}