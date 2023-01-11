console.log("HelloWorldd");

var bodyElement = document.querySelector("body");

console.log(bodyElement);

var buttonElement = document.querySelector("button");

buttonElement = addEventListener("click", function(){
        bodyElement.classList.add("glitch"); 
    });

