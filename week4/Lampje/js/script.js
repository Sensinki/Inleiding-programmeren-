var lamp = document.getElementById("bulb");
var lampAan = false;


function aanUitLamp() {
    if(lampAan == false){
        lamp.src = "img/bulb_on.jpg"
        lampAan = true
    } else{
        lamp.src = "img/bulb_off.jpg"
        lampAan = false
    }
}


lamp.addEventListener("click", aanUitLamp)
