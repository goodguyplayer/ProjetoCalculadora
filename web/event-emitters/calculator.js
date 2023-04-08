//const jquery = require('jquery');

let result = document.getElementById("calculator_screen");

let calculate=(number)=>{
    if(typeof result == 'undefined'){
        result.textContent = number;
    }
    else{
        result.textContent += number;
    }
}

let erase=()=>{

}

let eraseAll=()=>{
    
}

let finishOperation=()=>{
    try{
        result.textContent = eval(result.textContent);
    }
    catch(err){
        result.textContent = "ERROR";
    }
}