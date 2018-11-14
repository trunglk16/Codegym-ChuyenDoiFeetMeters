
function trans() {
    var x = document.getElementById("number").value;
    var result;
    var  way =  document.getElementById("method").value;
    if ( way == "mtof"){

        result = 0.305*x;
        document.getElementById("div").innerHTML = "The result is " + result + " feet";
    }else if (way == "ftom"){
        result = 3.279*x;
        document.getElementById("div").innerHTML = "The result is " + result + " meters";
    }
}