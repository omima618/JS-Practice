let user = document.getElementById("user");
let mail = document.getElementById("email");
let age = document.getElementById("age");
let track = document.getElementById("track");
let submit = document.querySelector(".submit");
getDataFromSessionStr();
submit.addEventListener("click", addDataToSessionStr);
function addDataToSessionStr() {
    window.sessionStorage.setItem("user", `${user.value}`);
    window.sessionStorage.setItem("email", `${mail.value}`);
    window.sessionStorage.setItem("age", `${age.value}`);
    window.sessionStorage.setItem("track", `${track.value}`);
}
function getDataFromSessionStr() {
    if (
        sessionStorage["user"] ||
        sessionStorage["email"] ||
        sessionStorage["age"] ||
        sessionStorage["track"]
    ) {
        user.value = sessionStorage["user"];
        mail.value = sessionStorage["email"];
        age.value = sessionStorage["age"];
        track.value = sessionStorage["track"];
    }
}
