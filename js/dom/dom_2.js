// setAttribute

console.log(document.body);

var div = document.createElement("div");

var p = document.createElement("p");

var strong = document.createElement("strong");

document.body.appendChild(div);

div.setAttribute("class","container")

div.setAttribute("id","con");

div.setAttribute("style","border:2px solid green");

div.appendChild(p);

p.appendChild(strong);

strong.innerText = "This is a paragraph";

// getAttribute

console.log(div.getAttribute("id"));

console.log(div.getAttribute("class"));