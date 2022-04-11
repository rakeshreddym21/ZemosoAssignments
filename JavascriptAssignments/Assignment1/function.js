const display=function(msg){
    console.log(msg);
}
function greet(name,func){
    msg="Happy Birthday "+name;
    display(msg)
}
greet("Manoj",display)