let slideImg = document.getElementById("img");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let icons = document.querySelectorAll("svg");
let i = 0;
icons.forEach((ele) => {
    ele.addEventListener("click", function () {
        if (ele.classList.contains("right")) {
            if (i === 8) {
                i = 0;
            }
            slideImg.setAttribute("src", `imgs/p(${arr[i++]}).jpg`);
        } else {
            if (i === 0) {
                i = 8;
            }
            slideImg.setAttribute("src", `imgs/p(${arr[--i]}).jpg`);
        }
    });
});

