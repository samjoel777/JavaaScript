let createEmployee = () =>
{
    var section = document.createElement('section');

    var h1 = document.createElement('h1');

    var ul = document.createElement('ul');

    var li1 = document.createElement('li');

    var li2 = document.createElement('li');

    document.body.appendChild(section);

    section.appendChild(h1);
    h1.innerText = "This is a h1 heading";

    section.appendChild(ul);

    ul.appendChild(li1);

    ul.appendChild(li2);

    h1.innerText = "Employee List";

    li1.innerText = "John Smith";

    li2.innerText = "Will Smith";
}

