
    let result = document.getElementById("top_result");

function caliculate(target){
    let target_number = target.innerHTML;
    
    if(target_number == "AC"){
        result.innerHTML = "0";
    } else if (target_number == "="){
        result.innerHTML = eval(result.innerHTML);
    }  else if(result.innerHTML.slice(-1) == "+"){
        let answer = result.innerHTML.slice(0,-1);
        result.innerHTML = answer  + "+";
        
    } else {
          if(result.innerHTML == "0"){
            result.innerHTML = target_number;
        } else {
            result.innerHTML += target_number;
        }
    }
}
