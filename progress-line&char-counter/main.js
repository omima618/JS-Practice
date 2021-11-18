let inp = document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
count.innerHTML = inp.getAttribute("maxlength");
inp.oninput = function () {
    count.innerHTML = inp.getAttribute("maxlength") - this.value.length;
    count.innerHTML === "0"
        ? count.classList.add("full")
        : count.classList.remove("full");
    // control progress line
    progress.style.width = `${
        (this.value.length * 100) / this.getAttribute("maxlength")
    }%`;
};
