var welcom = "yo";
console.log(welcom);

//variabele voor namen

var namen = ["Sena", "Arthur", "David", "Hein"];
console.log(namen[1]);

var pElement = document.querySelector("p.naam");

// pElement.textContent = namen[2];

var randomGetal = Math.random()*4;

randomGetal = Math.floor(randomGetal);

pElement.textContent = namen[randomGetal];
console.log(pElement)


//bonus opdracht lijkt me moeilijk te doen :(

// var wieTrakteerNiet;
// console.log(wieTrakteerNiet)


// if (namen[0]) {
//    document.querySelector("h1").innerHTML = "Wie trakteer niet"
// }

// if (!namen[0]) {
//    wieTrakteerNiet.textContent = 'Wie trakteer niet';
// } else (namen[0]) {
//    wieTrakteerNiet.textContent = 'Wie betaalt het bier?';
// }


//vragen die ik wil stellen

// hoe kan ik met "if" statement een tekst veranderen? 
// hoe zeg ik in "if" statement in een element binnen array wil kiezen?
// wat is verschil tussen "floor" en "ceil"?
// ...