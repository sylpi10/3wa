let btn;
let square;

function onclickBtn() {
    // square.style.backgroundColor = "lightblue";
    // square.style.marginLeft = "120px";
    square.classList.toggle("red");
}

document.addEventListener("DOMContentLoaded", function () {
    btn = document.querySelector("button");
    square = document.querySelector(".square");

    btn.addEventListener("click", onclickBtn);

 });






