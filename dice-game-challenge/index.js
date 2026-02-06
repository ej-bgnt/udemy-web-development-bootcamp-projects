
function rollD1() {
    var x = Math.floor(Math.random() * 6) + 1;
    if (x === 1) {
        document.querySelector(".p1-dice").setAttribute("src", "./assets/images/dice-1.svg");
    } else if (x === 2) {
        document.querySelector(".p1-dice").setAttribute("src", "./assets/images/dice-2.svg");
    } else if (x === 3) {
        document.querySelector(".p1-dice").setAttribute("src", "./assets/images/dice-3.svg");
    } else if (x === 4) {
        document.querySelector(".p1-dice").setAttribute("src", "./assets/images/dice-4.svg");
    } else if (x === 5) {
        document.querySelector(".p1-dice").setAttribute("src", "./assets/images/dice-5.svg");
    } else {
        document.querySelector(".p1-dice").setAttribute("src", "./assets/images/dice-6.svg");
    }

    return x
}

function rollD2() {
    var y = Math.floor(Math.random() * 6) + 1;
    if (y === 1) {
        document.querySelector(".p2-dice").setAttribute("src", "./assets/images/dice-1.svg");
    } else if (y === 2) {
        document.querySelector(".p2-dice").setAttribute("src", "./assets/images/dice-2.svg");
    } else if (y === 3) {
        document.querySelector(".p2-dice").setAttribute("src", "./assets/images/dice-3.svg");
    } else if (y === 4) {
        document.querySelector(".p2-dice").setAttribute("src", "./assets/images/dice-4.svg");
    } else if (y === 5) {
        document.querySelector(".p2-dice").setAttribute("src", "./assets/images/dice-5.svg");
    } else {
        document.querySelector(".p2-dice").setAttribute("src", "./assets/images/dice-6.svg");
    }
    return y
}

var randN1 = rollD1();
var randN2 = rollD2();


if(randN1 > randN2) {
    document.querySelector(".h-title").textContent = "🚩 Player 1 Wins!";
} else if (randN1 < randN2) {
    document.querySelector(".h-title").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector(".h-title").textContent = "Draw! 🏳️";
}