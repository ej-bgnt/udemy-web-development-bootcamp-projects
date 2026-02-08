//      ||        \\

function btnPress() {
    for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            var btnPressed = this.textContent;
            playSound(btnPressed);
            btnAnimation(btnPressed);
        });
    }
}


function keyPress() {
    document.addEventListener("keypress", function(event) {
        var keyPressed = event.key;
        playSound(keyPressed);
        btnAnimation(keyPressed);
    });
}

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "z":
            var snare = new Audio("./assets/sounds/snare.mp3");
            snare.play();
            break;

        case "x":
            var crash = new Audio("./assets/sounds/crash.mp3");
            crash.play();
            break;

        case "c":
            var kick = new Audio("./assets/sounds/kick-bass.mp3");
            kick.play();
            break;
            
        default:
            alert("gg bro");
            break;
    }
}

function btnAnimation(key) {
    var activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");

    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 100);
}


btnPress();
keyPress();
    