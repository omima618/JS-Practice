let contentDiv = document.querySelectorAll(".content > div");
let tabs = document.querySelectorAll("li");
let tabsArr = Array.from(tabs);
let divsArr = Array.from(contentDiv);
tabsArr.forEach((li) => {
    li.addEventListener("click", function (e) {
        tabsArr.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
        divsArr.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.target.dataset.content).style.display =
            "block";
    });
});
