
function makeSound(key){
    switch(key){
                case 'w' :  var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;
                case 'a' :  var audio = new Audio('sounds/tom-2.mp3');
                   audio.play();
                 break;
                case 's' : var audio = new Audio('sounds/tom-3.mp3');
                  audio.play();
                  break;
                case 'd' : var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                 break;
                case 'j' : var audio = new Audio('sounds/crash.mp3');
                 audio.play();
                 break;
                case 'k' : var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
                    break;
                case 'l' : var audio = new Audio('sounds/snare.mp3');
                        audio.play();
                break;
                default :
                        var audio = new Audio('sounds/crash.mp3');
                        audio.play();

 }

}

function buttonAnimation(currentkey){
    var activeButton= document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}
for( var i=0 ; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
