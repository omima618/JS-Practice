let container = document.querySelector(".container");
let imgsArr = [
    "URL(bgimg1.jpeg)",
    "URL(bgimg2.jpeg)",
    "URL(bgimg3.jpeg)",
    "URL(bgimg4.jpeg)",
    "URL(bgimg5.jpeg)",
];
setInterval(changeBg, 5000);
function changeBg() {
    container.style.background = `${
        imgsArr[Math.trunc(Math.random() * imgsArr.length)]
    }`;
}
