var color=""
var width=0
var radius=0
var draw=getContext("2d")
var mouseEvent=""
var canvas=document.getElementById("myCanvas")
var current_position_of_mouse_x=document.getElementById("mousemove").value
var current_position_of_mouse_y=document.getElementById("mousemove").value

canvas.addEventListener=("mousedown", my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value
    width=document.getElementById("width").value
    radius=document.getElementById("radius").value
    mouseEvent="mousedown"
}
canvas.addEventListener=("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}    
canvas.addEventListener=("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener=("mousemove", my_mousemove)
function my_mousemove(e){
      current_position_of_mouse_x =e.clientX-canvas.offsetLeft
      current_position_of_mouse_y=e.clientY-canvas.offsetTop
      if (mouseEvent == "mousedown") {
       console.log("Current position of x and y coordinates")
       console.log("x =" + current_position_of_mouse_x +"y="+current_position_of_mouse_y)
       draw.beginPath()
       draw.strokeStyle-color
       draw.lineWidth=width
       draw.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI)
       draw.stroke()
      }
} 
