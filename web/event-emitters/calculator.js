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
        $("#calculator_screen").text(number);
    }
    else{
        $("#calculator_screen").text($("#calculator_screen").text() + number);        
    }
}

let erase=()=>{
    try{
        $("#calculator_screen").text($("#calculator_screen").text().slice(0, -1));
    }
    catch(err){

    }
}

let eraseAll=()=>{
    $("#calculator_screen").text("");
}

let finishOperation=()=>{
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: JSON.stringify({username: $("#usr").val(), operation: $("#calculator_screen").text()}),
        success: function(data) {alert('data: ' + data); },
        contentType: "application/json",
        dataType: 'json'
    });

    try{
        $("#calculator_screen").textContent = eval($("#calculator_screen").textContent);
    }
    catch(err){
        $("#calculator_screen").textContent = "ERROR";
    }
}