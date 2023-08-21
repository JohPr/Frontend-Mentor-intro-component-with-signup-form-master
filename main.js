"use strict";

var form = document.querySelector(".form");
var email = document.getElementById("email");
var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



email.addEventListener("keyup", e => {
    if (email.value === pattern) {
        email.style.border = "2px solid green";
    }
    else if (email.value === "") {
        email.style.border = "1px solid  hsl(246, 25%, 77%)";
    }
    else {
        email.style.border = "2px solid red";
        
    }
    console.log(email.value);
});