let result = document.getElementById("result");


/* display value*/
function dis(value) {
 result.value  += value
}

/* clear value*/

function clr(){
    result.value = ""
}



/* eval */

function solve() {
    if (result.value != ""){
        result.value =  eval(result.value).toFixed(2)
    }
}