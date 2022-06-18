var mouseEvent="empty";
var lat_postion_of_x,lat_postion_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currentpostion_of_mousex=e.clientX-canvas.offsetLeft;
    currentpostion_of_mousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentpostion_of_mousex,currentpostion_of_mousey,radius,0,2*Math.PI);
ctx.stroke();
    }
    }
    canvas.addEventListener("mouseup",my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent="moveUP";
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent="moveLEAVE";
    }
    function clearArea()
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }