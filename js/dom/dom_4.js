console.log(document.body);

var table = document.createElement('table');
table.setAttribute('class','container');

var tr1 = document.createElement('tr');

var tr2 = document.createElement('tr');
tr2.setAttribute("id","p1");

var th1 = document.createElement('th');

var th2 = document.createElement('th');

var td1 = document.createElement('td');

var td2 = document.createElement('td');

document.body.appendChild(table);

table.appendChild(tr1);

tr1.appendChild(th1);
th1.innerText = "FirstName";

tr1.appendChild(th2);
th2.innerText = "SecondName";

table.appendChild(tr2);

tr2.appendChild(td1);
td1.innerText = "SAM";

tr2.appendChild(td2);
td2.innerText = "JOEL";