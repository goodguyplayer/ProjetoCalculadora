//import express from '../app.js';
//var http = require('http');
//const jquery = require('jquery');
//const port = 5050;
//const address = '192.168.15.7'
//var client = http.createClient(port, address);
//var request = client.request('PUT', '/users/1');
//let result = document.getElementById("calculator_screen");
let result = $("#calculator_screen");
let username_data = $("#username");


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
    const body = {
        "username" : username_data.text(),
        "operation" : result.text(),
    };

    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: JSON.stringify({username: username_data.text(), operation: result.text()}),
        success: function(data) {alert('data: ' + data); },
        contentType: "application/json",
        dataType: 'json'
    });

    try{
        result.textContent = eval(result.textContent);
    }
    catch(err){
        result.textContent = "ERROR";
    }
}