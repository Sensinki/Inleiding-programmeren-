

var sleutel = document.querySelector("#sleutel");

var kist = document.querySelector("#kist");


function openDeKist() {

    kist.src = "gifjes/chest1/chest1_open.gif";
}

sleutel.addEventListener("click", openDeKist);


function dichtDeKist() {

    kist.src = "gifjes/chest1/chest1_closed.gif";
}

kist.addEventListener("click", dichtDeKist);