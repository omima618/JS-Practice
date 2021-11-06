let myItems = document.querySelectorAll("ul li");
let exp = document.querySelector(".exp");
if (window.localStorage.getItem("color")) {
    exp.style.backgroundColor = window.localStorage.color;
    myItems.forEach((li) => {
        li.classList.remove("active");
    });
    document
        .querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
        .classList.add("active");
}
myItems.forEach((li) => {
    li.addEventListener("click", (e) => {
        // remove active class
        myItems.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        exp.style.backgroundColor = window.localStorage.color;
    });
});
