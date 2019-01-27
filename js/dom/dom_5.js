console.log(document.body);

var table = document.createElement('table');

for(i=1 ; i<=5 ; i++)
{
    document.body.appendChild(table);
    var tr = table.appendChild(document.createElement('tr'));
    table.appendChild(tr);

    for(x=1 ; x<=5 ; x++)
    {
    var td = tr.appendChild(document.createElement('td'));
    // td.innerText = "CELL";
    }
}








