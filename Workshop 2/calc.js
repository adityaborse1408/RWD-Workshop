function clear(){
   document.getElementById("calc").value = " ";
}

function result(val){
    document.getElementById("calc").value+=val;
}

function calculator(){
    var x = document.getElementById("calc").value;
    var y = eval(x);
    document.getElementById("calc").value=y;
}

function science(){
    var a = document.getElementById("div1");
    a.classList.toggle("mydiv");

}