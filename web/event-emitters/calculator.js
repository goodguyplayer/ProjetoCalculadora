let result=document.getElementById("calculator_screen");

let calculate=(number)=>{
    result.value += number;
}

let erase=()=>{

}

let eraseAll=()=>{
    
}

let finishOperation=()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        result.value = "ERROR";
    }
}