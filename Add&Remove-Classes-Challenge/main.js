let currentEle = document.getElementById("current");
let addClass = document.querySelector(".add");
let removeClass = document.querySelector(".remove");
let containerDiv = document.querySelector(".container");
let message = document.createElement("p");
if (document.querySelectorAll(".class-name").length === 0) {
    containerDiv.style.marginTop = "20px";
    containerDiv.append(message);
    message.innerText = "No Classes To Show";
}
addClass.onblur = function () {
    let arrC = addClass.value.toLowerCase().split(" ").sort();
    for (let i = 0; i < arrC.length; i++) {
        currentEle.classList.add(arrC[i]);
    }
    containerDiv.innerHTML = "";
    for (let i = 0; i < currentEle.classList.length; i++) {
        let mySpan = document.createElement("span");
        mySpan.className = "class-name";
        mySpan.append(currentEle.classList[i]);
        containerDiv.append(mySpan);
    }
    addClass.value = "";
};
removeClass.onblur = function () {
    let arrC = removeClass.value.toLowerCase().split(" ");
    for (let i = 0; i < arrC.length; i++) {
        for (
            let j = 0;
            j < document.querySelectorAll(".class-name").length;
            j++
        ) {
            if (
                arrC[i] ===
                document.querySelectorAll(".class-name")[j].textContent
            ) {
                containerDiv.removeChild(
                    document.querySelectorAll(".class-name")[j]
                );
            }
        }
        if (currentEle.classList.contains(arrC[i])) {
            currentEle.classList.remove(arrC[i]);
        }
    }
    if (document.querySelectorAll(".class-name").length === 0) {
        containerDiv.style.marginTop = "20px";
        containerDiv.append(message);
        message.innerText = "No Classes To Show";
    }
    removeClass.value = "";
};
