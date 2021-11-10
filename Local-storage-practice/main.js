// create font size options using JS
let sizeBox = document.getElementById("size");
for (let i = 17; i <= 30; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    sizeBox.appendChild(opt);
    opt.innerHTML = i;
}
// font size options
let fs = document.querySelectorAll("#size option");
let fsArr = Array.from(fs);
fsArr.forEach((opt) => {
    opt.style.fontSize = `${opt.getAttribute("value")}px`;
});
// color options
let clrs = document.querySelectorAll("#color option");
let clrsArr = Array.from(clrs);
clrsArr.forEach((opt) => {
    opt.style.color = opt.getAttribute("value");
});
// font family options
let ff = document.querySelectorAll("#family option");
let ffArr = Array.from(ff);
ffArr.forEach((opt) => {
    opt.style.fontFamily = opt.getAttribute("value");
});
/////////////////////////////
let fsBox = document.getElementById("size");
let ffBox = document.getElementById("family");
let clrBox = document.getElementById("color");
let doneBtn = document.querySelector(".done");
getDataFromLocalStr();
bodyStyle();
doneBtn.addEventListener("click", function () {
    addValuesToLocalStrg();
    bodyStyle();
});
function bodyStyle() {
    document.body.style.cssText = `font-size: ${fsBox.value}px; font-family: ${ffBox.value}; color: ${clrBox.value}`;
}
function addValuesToLocalStrg() {
    window.localStorage.setItem("size", `${fsBox.value}`);
    window.localStorage.setItem("family", `${ffBox.value}`);
    window.localStorage.setItem("color", `${clrBox.value}`);
}
function getDataFromLocalStr() {
    if (
        localStorage["size"] &&
        localStorage["family"] &&
        localStorage["color"]
    ) {
        fsBox.value = localStorage.getItem("size");
        ffBox.value = localStorage.getItem("family");
        clrBox.value = localStorage.getItem("color");
    }
}
