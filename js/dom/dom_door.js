console.log(document.body);

var img = document.createElement('img');
img.setAttribute("id","myImage");
img.setAttribute("onclick","changeImage()");
img.setAttribute("src","H:/JavaScript/media/Door_1.png");

document.body.appendChild(img);

var p = document.createElement('p');
p.innerText = "Click the Door to Open/Close the light";
document.body.appendChild(p);

function changeImage()
{
    var image = document.getElementById('myImage');

    if(image.src.match("H:/JavaScript/media/Door_2.png"))
    {
        image.src = "H:/JavaScript/media/Door_1.png";
    }
    else
    {
        image.src = "H:/JavaScript/media/Door_2.png";
    }
}


