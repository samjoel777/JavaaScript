console.log(document.body);

var gate_Img = document.createElement('img');
gate_Img.setAttribute("id","gate");
gate_Img.setAttribute("onclick","gate()");
gate_Img.setAttribute("src","file:///C:/Users/SASTRY/Downloads/Front%20Gate%20Closed-595b40b65ba036ed117d410c.svg");

document.body.appendChild(gate_Img);

function gate()
{
    let image = document.getElementById('gate');

    if(image.src.match("file:///C:/Users/SASTRY/Downloads/Front%20Gate%20Open-595b40b65ba036ed117d410d.svg"))
    {
        image.src = "file:///C:/Users/SASTRY/Downloads/Front%20Gate%20Closed-595b40b65ba036ed117d410c.svg";
    }
    else
    {
        image.src = "file:///C:/Users/SASTRY/Downloads/Front%20Gate%20Open-595b40b65ba036ed117d410d.svg";
    }
}

// console.log(gate());