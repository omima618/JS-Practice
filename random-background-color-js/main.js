let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let bgClr = [];
for (let i = 0; i < 6; i++) {
    bgClr.push(arr[Math.floor(Math.random() * arr.length)]);
}
document.body.prepend(`reload me to change the background color 
my color is #${bgClr.join("")}`);
document.body.style.backgroundColor = `#${bgClr.join("")}`;
