console.log(document);

var h1 = document.createElement('h1');

var h2 = document.createElement("h2");

var h3 = document.createElement("h3");

var h4 = document.createElement("h4");

var x = document.createElement("h1");

var y = document.createElement("h2");

var p = document.createElement('p');

var section = document.createElement('section');

var div = document.createElement('div');


document.body.appendChild(section);
section.appendChild(div);

div.appendChild(h1);
h1.innerHTML = "this is h1 heading";

div.appendChild(h2);
h2.innerHTML = "this is h2 heading";

div.appendChild(h3);
h3.innerHTML = "this is h3 heading";

div.appendChild(h4);
h4.innerHTML = "this is h4 heading";

div.appendChild(x);
x.innerHTML = "this is h1 heading";

div.appendChild(y);
y.innerHTML = "this is h2 heading";

div.appendChild(p);
p.innerText = "This is a Paragraph";


console.log(h1.innerHTML);
console.log(p.innerText);

var body = document.body;
console.log(body);