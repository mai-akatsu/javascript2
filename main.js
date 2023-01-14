
    let result = document.getElementById("top_result");

function caliculate(target){
    let target_number = target.innerHTML;
    
    if(target_number == "AC"){
        result.innerHTML = "0";
    } else if (target_number == "="){
        result.innerHTML = eval(result.innerHTML);
    } else {
          if(result.innerHTML == "0"){
            result.innerHTML = target_number;
        } else {
            result.innerHTML += target_number;
        }
    }
}

let operator = document.getElementById("operator");

operator.addEventListener('click', function(ope) {
    let ope_target = ope.innerHTML;
    if(result.innerHTML.slick(-1) == operator){
        let answer = result.innerHTML(0,-1);
        result.innerHTML = answer + result.innerHTML;
    }else{
        result.innerHTML += result.innerHTML;
    }
    
}, false);


