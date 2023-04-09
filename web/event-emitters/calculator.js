//import express from '../app.js';
//var http = require('http');
//const jquery = require('jquery');
//const port = 5050;
//const address = '192.168.15.7'
//var client = http.createClient(port, address);
//var request = client.request('PUT', '/users/1');

//let result = document.getElementById("calculator_screen");
let result = $("#calculator_screen");
let username = $("#username");

console.log(result);

let calculate=(number)=>{
    if(typeof result == 'undefined'){
        result.text(number);
    }
    else{
        result.text(result.text() + number);        
    }
}

let erase=()=>{
    try{
        result.text(result.text().slice(0, -1));
    }
    catch(err){

    }
}

let eraseAll=()=>{
    result.text("");
}

let finishOperation=()=>{
    const toCalculate = {
        "username" : username.text(),
        "operation" : result.text(),
    };
    console.log(toCalculate);
    fetch('/calculate', {
        method: 'POST', 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        body: JSON.stringify({
            "username" : document.getElementById("username").value,
            "operation" : result.textContent,
        })
    })
        .then(function(response) {
            if (response.ok){
                console.log("Finish operation api called");
                return;
            }
            throw new Error('Request failed');
        })
        .catch(function(error){
            console.log(error);
        });

    //console.log(toCalculate);
    try{
        result.textContent = eval(result.textContent);
    }
    catch(err){
        result.textContent = "ERROR";
    }
}