console.log(document.body);

var table = document.createElement('table');
table.setAttribute("class","table");

var thead = document.createElement('thead');

// var th = document.createElement('th'); 

var tr = document.createElement('tr');

var td = document.createElement('td');

document.body.appendChild(table);

table.appendChild(thead);
thead.appendChild(tr);

for(i=1 ; i<=5 ; i++)
{
    tr.appendChild(document.createElement('th'));
}

var th = document.querySelectorAll('th');

for(item of th)
{
    // th.setAttribute("scope","col");
    item.setAttribute("scope","col");
}

var tbody = document.createElement('tbody');
table.appendChild(tbody);

for(i=1 ; i<=5 ; i++)
{
    tbody.appendChild(document.createElement('tr'));
}

var tr1 = document.querySelectorAll('tbody tr');

for(item of tr1)
{
    var th = item.appendChild(document.createElement('th'));
}

var th1 = document.querySelectorAll('tbody tr th');

for(item of th1)
{
    item.setAttribute("scope","row");
    for(i=1 ; i<=5 ; i++)
    {
        item.appendChild(document.createElement('td'));
    }
}


