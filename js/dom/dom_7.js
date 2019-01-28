var section = document.createElement('section');
section.setAttribute("class","section");

var div = document.createElement('div');
div.setAttribute("class","new");
document.body.appendChild(div);

var p = document.createElement('p');
p.setAttribute("class","new");
p.innerText = "This is a Paragraph";

var p2 = document.createElement('p');
p2.setAttribute("class","new");
p2.innerText = "This is a Pargraph2"

var h1 = document.createElement('h1');
h1.innerText = "This is a h1 heading";

section.appendChild(p);
section.appendChild(h1);

div.appendChild(p2);

document.body.appendChild(section);

console.log(document.body);

// Reading HTML Elements

//Reading Single Elements
let head1 = document.querySelector('h1');
console.log(head1);

//Reading Multiple Elements
let para = document.querySelectorAll('div .new');
console.log(para);