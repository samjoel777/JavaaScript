console.log(document.body);

var h2 = document.createElement('h2');
h2.innerText = "This is Employee List";
document.body.appendChild(h2);

var section = document.createElement('section');
document.body.appendChild(section);

var input = document.createElement('input');
input.setAttribute("type","input");
input.setAttribute("id","input1");
section.appendChild(input);

var button = document.createElement('button');
button.innerText = "Add Employee";
button.setAttribute("type","button");
button.setAttribute("onclick","createEmployeeList()");
section.appendChild(button);

var button1 = document.createElement('button');
button1.innerText = "Remove Employee";
button1.setAttribute("type","button");
button1.setAttribute("onclick","removeEmployee()");
section.appendChild(button1);

var button2 = document.createElement('button');
button2.innerText = "Update Employee";
button2.setAttribute("type","button");
button2.setAttribute("onclick","updateEmployee()");
section.appendChild(button2);

var ul = document.createElement('ul');
section.appendChild(ul); 

var li = document.createElement('li');
li.innerText = "APPLE"
li.setAttribute("class","list");
ul.appendChild(li);

var li2 = document.createElement('li');
li2.innerText = "SAM"
li2.setAttribute("class","list");
ul.appendChild(li2);

var count = 3;

function createEmployeeList()
{
    var li3 = document.createElement('li');
    li3.setAttribute("class","list");
    li3.innerText = input.value;

    if(li3 != null)
    {
         ul.appendChild(li3);
    }
    
    console.log(li3);
}

// createEmployeeList();

function removeEmployee()
{
    var list = document.querySelectorAll('.list')
    for(item of list)
    {
        if(input.value == item.innerText)
        {
            item.outerHTML = "";
        }
    }
}


function updateEmployee()
{
    var list = document.querySelectorAll('.list');
    for(item of list)
    {
        if(input.value == item.innerText)
        {
            // var new_Name = document.querySelector('#input1');
            // new_Name.innerText = prompt("Enter New Name");
            // item.innerText = "NEW";
            // console.log(new_Name.value);

            var new_Name = prompt("Enter New Name");
            // new_Name.innerText = prompt("Enter New Name");
            item.innerText = `${new_Name}`;
            console.log(new_Name);
        }
    }
}
