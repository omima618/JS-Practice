let endDate = new Date("Dec 31, 2021 23:59:59").getTime();
let countdown = setInterval(function () {
    let nowDate = new Date().getTime();
    let timeLeft = endDate - nowDate;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML =
        hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".container").remove();
        document.querySelector("h1").innerHTML = "Happy New Year";
    }
}, 1000);
