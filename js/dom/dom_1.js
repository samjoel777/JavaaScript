var h1 = document.createElement('h1');

var h2 = document.createElement('h2');

var h3 = document.createElement('h3');

var p1 = document.createElement('p');

var p2 = document.createElement('p');

var p3 = document.createElement('p');

var p4 = document.createElement('p');

var div = document.createElement('div'); 

let aside = document.createElement('aside');

let blockquote = document.createElement('blockquote');

let article = document.createElement('article');

let p5 = document.createElement('p');

let bold = document.createElement('b');

let underline = document.createElement('u');

var section1 = document.createElement('section');

var section2 = document.createElement('section');

var section3 = document.createElement('section');

document.body.appendChild(div);
div.appendChild(section1);
div.appendChild(section2);

section1.appendChild(h1);
h1.innerText = "This is h1 heading";

section1.appendChild(p1);
p1.innerText ="This is a Paragraph";

section1.appendChild(p2);
p2.innerText = "This is a Paragraph";

section2.appendChild(h2);
h2.innerText = "This is h2 heading";

section2.appendChild(p3);
p3.innerText = "this is a Paragraph";

section2.appendChild(h3);
h3.innerText = "this is h3 heading";

section2.appendChild(p4);
p4.innerText = "this is a Paragraph";

document.body.appendChild(section3);

section3.appendChild(aside);
aside.appendChild(blockquote);
blockquote.innerText ="For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally."

section3.appendChild(article);
article.appendChild(p5);
p5.appendChild(bold);
bold.innerText = `This is me`
bold.append(underline);
// underline.innerHTML = "<u> day to day </u>"
underline.innerText = " day to day "; 


console.log(document.body);