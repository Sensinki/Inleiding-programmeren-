// Eerst test ik of mijn JavaScript werkt. 
// Als het werkt, zien we "Hallo" in de console.
console.log("Hallo")

// Allereerst heb ik variabelen gemaakt voor de elementen die ik nodig heb uit de DOM.
var knop;
var tekst;
var counter = 0;
var audioObject;

// Hier vertel ik JavaScript met welk element deze var's overeenkomt.
knop = document.querySelector("#knop");
tekst = document.querySelector(".begin");
audioObject = document.querySelector("#audioo");



// Een functie om het audio te spelen
// https://www.geeksforgeeks.org/p5-js-loadsound-function/ 
function againFunctie () {
    audioObject.play();
}

/// Tekst element class geeft die display non doet. Zodra je klikt op de knop, de class weer verwijderen.

function myScript() {
    // Postfix: ++ kloont eerst number en voert de functie. Daarna +1 toevoegen niet gekloonde number voor volgende actie.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment#postfix_increment
    counter++;

    // https://stackoverflow.com/questions/65410955/how-to-make-button-randomly-change-position-when-clicked
    var hoogte = Math.floor(Math.random() * 1200)+1;
    var breedte = Math.floor(Math.random() * 600)+1;
    knop.style.left = hoogte + "px";
    knop.style.top = breedte + "px";
    // Om de tekst weg te laten -hulp krijgen van Arthur
    tekst.classList.add("hide");
}


function myKlik() {

    if (counter < 30) {

        // Om een alert (soort van melding) op de pagina te krijgen.
        window.alert("You had to try " + counter + " times to catch it." + " I will definitely not lose to you next time. You're going to regret it. Try again!");
        // Waar het audio gespeld wordt
        againFunctie();
        
    } else {

        // Om een alert (soort van melding) op de pagina te krijgen.
        window.alert("You had to try " + counter + " times to catch it." + " Maybe you should just give up. Try again buddy hahahhahaah");
        // Waar het audio gespeld wordt
        againFunctie();

    }

    // Om gele tekst terug brengen -hulp krijgen van Arthur
    tekst.classList.remove("hide");

    // Voor het volgende keer moet het sayac 0 zijn om nog een keer van 1 te beginnen.
    counter = 0;

}


/// Note van Arthur: met setInterval functie myScript uitvoeren ipv mouseover

//Linkje voor setInterval (om hover effect te geven)
// https://www.demo2s.com/javascript/jquery-setinterval-and-hover.html

// Ik maak een functie om interval te beginnen -hulp krijgen van David 
function startSpel () {
    setInterval(myScript, 300, timeoutId);
}


// Ik las een turkse website om te begrijpen wat het setInterval en het setTimeout zijn.
// https://tr.javascript.info/settimeout-setinterval 
timeoutId = setTimeout(startSpel, "5000");

// Voert myKlik functie uit als de knop geklikt wordt.
knop.addEventListener("click", myKlik);
