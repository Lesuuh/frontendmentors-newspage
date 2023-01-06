let menuOpenBtn = document.getElementById("navMenu");
let menu = document.querySelector(".sidebar");
let menuClosebtn = document.querySelector(".closeline");
let section = document.querySelector("body");


menuOpenBtn.addEventListener("click", function(){
    menu.style.display = "block";
    menu.style.opacity = "1"
    section.style.opacity = "0.5"

    // menu.style.opacity = "1"

})

menuClosebtn.addEventListener("click", function(){
    menu.style.display = "none"
    menu.style.opacity = "1"
    section.style.opacity = "1"
})