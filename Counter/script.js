const val = document.getElementById("count");


function inc(){
let oldvalue = val.textContent;
let newvalue = parseInt(oldvalue)+1;
val.textContent = newvalue;
}


function de(){
    let oldvalue = val.textContent;
    let newvalue = parseInt(oldvalue)-1;
    val.textContent = newvalue;
    }

function re(){
    val.textContent = "0";
}