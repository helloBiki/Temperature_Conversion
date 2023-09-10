document.getElementById("btn").onclick=function(){
    let cel=document.getElementById("inbox").value;
    cel=Number(cel);
    let feh=cel * (9/5) + 32;
    document.getElementById("ans").innerHTML=`Fahrenheit: ${feh}*f`;
}