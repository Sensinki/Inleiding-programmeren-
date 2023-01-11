
var namen;

namen = ["Sena", "Arthur", "David", "Hein", "Iedereen"];

var naamElement = document.querySelector("p.naam");

var h1Element = document.querySelector("h1");

var randomGetal = Math.random();

var eenButton = document.querySelector("button");


randomGetal = randomGetal * 5;

randomGetal = Math.floor(randomGetal);

naamElement.textContent = namen[randomGetal];



function eenNaamGeven() {

    randomGetal = Math.random()*5;

    randomGetal = Math.floor(randomGetal);
    
    naamElement.textContent = namen[randomGetal];

    if (namen[randomGetal] === "Arthur") {
        h1Element.textContent = "Hoeft nooit te betalen";
        document.querySelector("p:nth-of-type(2)").textContent = " ";

    } else {
        h1Element.textContent = "Wie betaalt het bier?";
        document.querySelector("p:nth-of-type(2)").textContent = "moet betalen!";
    }
}


eenButton.addEventListener("click", eenNaamGeven);