canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");

var mouseEvent="empty";
var last_position_of_x,last_position_of_y;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
    color="";
    width_of_line="";
    radius="";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);


function mymousemove(e)
{
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent =="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle="purple";
        ctx.lineWidth=3;
        ctx.arc(mouseX,mouseY,45,0,2*Math.PI);
        ctx.stroke();


        console.log("Last position of x and y cordinates are");
        console.log("x= "+last_position_of_x+ " and y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("Current position of x and y cordinates are");
        console.log("x= "+current_position_of_x+ " and y="+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);

        ctx.stroke();
  
    }
    
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;

    
}