// body style
let mainColor = "#23c46e";
document.body.style.cssText =
    "background-color:#eee; height:100vh; margin:0; padding:0; box-sizing:border-box; font-family: 'Libre Franklin', sans-serif;";
// create header, style, and add it to body
let theHeader = document.createElement("header");
document.body.prepend(theHeader);
theHeader.style.cssText =
    "background-color:white; height:60px; padding:0 20px; display:flex; justify-content:space-between; align-items:center";
// create logo and add it in header
let logo = document.createElement("div");
let logoText = document.createTextNode("Layout");
logo.className = "logo";
logo.appendChild(logoText);
theHeader.prepend(logo);
logo.style.cssText = `color:${mainColor}; font-size:25px; font-weight:600;`;
// create the nav bar and add it to header
let navBar = document.createElement("nav");
theHeader.append(navBar);
// create ul & its items and add to nav bar
let navList = document.createElement("ul");
navBar.append(navList);
navList.style.cssText =
    "list-style:none; display:flex; justify-content:space-between; align-items:center; color:#777;";
let listItem = [];
listItem.length = 4;
let itemText;
for (let i = 0; i < listItem.length; i++) {
    listItem[i] = document.createElement("li");
    navList.append(listItem[i]);
    if (i === 0) {
        itemText = document.createTextNode("Home");
    } else if (i === 1) {
        itemText = document.createTextNode("About");
    } else if (i === 2) {
        itemText = document.createTextNode("Services");
    } else if (i === 3) {
        itemText = document.createTextNode("Contact");
    }
    listItem[i].appendChild(itemText);
    listItem[i].style.margin = "0 10px";
}
// create main section & add it after the header
let mainSec = document.createElement("section");
theHeader.after(mainSec);
mainSec.style.cssText = `width:100%; height:505px; padding:10px; display:flex; justify-content:space-evenly; align-items:center; flex-wrap:wrap; box-sizing:border-box`;
// add products with style in mainSec
let product = [];
product.length = 15;
let productNum;
let productText;
for (let i = 0; i < product.length; i++) {
    product[i] = document.createElement("div");
    product[i].className = "product";
    mainSec.append(product[i]);
    productNum = document.createElement("span");
    product[i].prepend(productNum);
    productNum.style.cssText =
        "display:block; font-weight:700; color:black; font-size:25px; margin-bottom:10px;";
    productNum.innerHTML = i + 1;
    productText = document.createElement("span");
    product[i].append(productText);
    productText.innerHTML = "Product";
    productText.style.cssText =
        "display:block; font-weight:300; color:#777; font-size:18px;";
    document.querySelectorAll(".product")[i].style.cssText =
        "width:32%; height:17%; background-color:white; border-radius:5px; text-align:center; display:flex; flex-direction:column; justify-content:center; align-items:center;";
}
// create footer, style, add it after mainSec
let ft = document.createElement("footer");
mainSec.after(ft);
ft.style.cssText = `background-color: ${mainColor}; width:100%; height:60px; font-size:17px; display:flex; justify-content:center; align-items:center; text-align:center; color:white`;
let ftP = document.createElement("p");
ft.append(ftP);
ftP.innerHTML = "Copyright 2021";
