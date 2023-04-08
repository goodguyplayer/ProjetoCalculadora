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
    try{
        result.textContent = result.textContent.slice(0, -1);
    }
    catch(err){

    }
}

let eraseAll=()=>{
    result.textContent = ""
}

let finishOperation=()=>{
    console.log(document.getElementById("username").value);
    try{
        result.textContent = eval(result.textContent);
    }
    catch(err){
        result.textContent = "ERROR";
    }
}