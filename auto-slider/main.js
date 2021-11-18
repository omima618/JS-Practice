let slideImg = document.getElementById("img");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let slideTime = setInterval(function () {
    slideImg.setAttribute(
        "src",
        `imgs/p(${arr[Math.floor(Math.random() * arr.length)]}).jpg`
    );
}, 3000);
