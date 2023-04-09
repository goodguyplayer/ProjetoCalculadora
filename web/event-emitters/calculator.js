//import express from '../app.js';
//var http = require('http');
//const jquery = require('jquery');
//const port = 5050;
//const address = '192.168.15.7'
//var client = http.createClient(port, address);
//var request = client.request('PUT', '/users/1');

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
    const toCalculate = {
        username : document.getElementById("username").value,
        operation : result.textContent,
    };
    fetch('/calculate', {method: 'POST'})
        .then(function(response) {
            if (response.ok){
                console.log("Finish operation api called");
                return toCalculate;
            }
            throw new Error('Request failed');
        })
        .catch(function(error){
            console.log(error);
        });

    console.log(toCalculate);
    try{
        result.textContent = eval(result.textContent);
    }
    catch(err){
        result.textContent = "ERROR";
    }
}