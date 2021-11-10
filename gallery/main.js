let list = document.querySelectorAll("ul li");
let photos = document.querySelectorAll(".gallery img");
list.forEach((li) => {
    li.addEventListener("click", (e) => {
        list.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
        photos.forEach((img) => {
            img.style.display = "none";
            if (img.classList.contains(`${e.target.dataset.cat}`)) {
                img.style.display = "inline-block";
            }
        });
    });
});
