let serialDiv = document.querySelector(".serial");
let genBtn = document.querySelector(".gen");
let chars = "1234567890abcdefghijklmnopqrstuvwxyz";
let serLength = 12;
genBtn.addEventListener("click", function () {
    let serialNum = "";
    for (let i = 0; i < serLength; i++) {
        serialNum += chars[Math.floor(Math.random() * chars.length)];
    }
    serialDiv.style.display = "block";
    serialDiv.innerHTML = serialNum;
});
