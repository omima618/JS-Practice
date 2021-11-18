let heading = Array.from(document.querySelectorAll(".sec-heading"));
for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function () {
        let textDiv = this.nextElementSibling;
        this.classList.toggle("active");
        if (textDiv.style.maxHeight) {
            textDiv.style.maxHeight = null;
        } else {
            textDiv.style.maxHeight = `${textDiv.scrollHeight}px`;
        }
    });
}
