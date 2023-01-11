/*  
    -------
    De volgende vijf code regels zorgen dat iedere keer dat je da pagina refresht,
    er een andere dobbelsteen te voorschijn komt. 
    Met comments staat uitgelegd hoer dit werkt.
    Voor deze oefening hoef je hier niets aan te passen, jouw werk begint eronder
    ------- 
*/

// hier wordt een toevalsgetal tussen van 1 t/m 6 gegenereerd en vervolgens opgeslagen in een variabele aantalOgen
// een variabele is een soort virtueel doosje waar je iets in kan stoppen en weer uit kan halen maar ook kan wijzigen.
var aantalOgen = Math.ceil(Math.random()*6);

// even in de console kijken welke waarde hier uitkomt
console.log(aantalOgen);

//we schrijven deze waarde ook naar de <p>aragraaf in de html 
document.querySelector("p").textContent = 'mooie worp: '+aantalOgen; 

// een verzameling met alle bestandsnamen van de afbeeldingen uit het mapje images aanmaken
var plaatjesArray = ['one.png','two.png','three.png','four.png','five.png','six.png'];

/*  
    hier maken we een variabele aan dobbelsteenAfbeelding
    we halen de bestandsnaam uit die overeenkomt met de waarde van var aantalOgen
    door deze waarde tussen de haken [index] te zetten vragen we de juiste bestandsnaam op
    let op arrays beginnen te tellen bij 0 en niet bij 1 
    dus we moeten -1 doen om de juiste index waarde te kiezen
*/
var dobbelsteenAfbeelding = plaatjesArray[aantalOgen-1];

// hier selecteren we de 1e afbeelding uit de html en passen de src van de image aan
document.querySelector("img").src = 'images/'+dobbelsteenAfbeelding;

/*  
    -------
    Hier onder begint jouw code dus na het sterretje/
    ------- 
*/

/*
if (aantalOgen==1){
    document.querySelector('p').textContent = 'Jammer je hebt 1 gegooid, verloren :)';
    }

if (aantalOgen==2){
    document.querySelector('p').textContent = 'Je hebt er 2 gegooid, misschien moet je harder proberen';
    }

if (aantalOgen==3){
    document.querySelector('p').textContent = 'Je hebt er 3 gegooid, het lijkt erop dat je een beetje pech hebt';
    }

if (aantalOgen==4){
    document.querySelector('p').textContent = 'Je hebt er 4 gegooid, nog steeds niet genoeg.';
    }    

if (aantalOgen==5){
    document.querySelector('p').textContent = 'Je hebt 5 gegooid en hebt bijna gewonnen.';
    }

if (aantalOgen==6){
    document.querySelector('p').textContent = 'Jammer je hebt 3 gegooid en hebt verloren.';
    }

*/

/* Oneven numbers een op een.

if (aantalOgen==1){
    document.querySelector('p').textContent = 'Jammer je hebt 1 gegooid, verloren :)';
    }

if (aantalOgen==3){
    document.querySelector('p').textContent = 'Je hebt er 3 gegooid en hebt verloren.';
    }    

if (aantalOgen==5){
    document.querySelector('p').textContent = 'Je hebt 5 gegooid en hebt verloren.';
    }    

*/

if (aantalOgen==1 || aantalOgen==3 || aantalOgen==5){
    document.querySelector('p').textContent = 'Jammer, oneven. Je hebt verloren!';
}    

else if (aantalOgen==2 || aantalOgen==4){
    document.querySelector('p').textContent = 'Ja, je heeft gewonnen';
}    

else {
    document.querySelector('p').textContent = 'Feest! dubbel uitbetaald!!!!!';
    }


