let result = $("#calculator_screen");
let username_data = $("#username");

$.ajax({
    type: 'GET',
    url: '/loaddata',
    success: async function(data) {
        data.forEach(addToTable);
    },
    contentType: "application/json",
    dataType: 'json'
});

function addToTable(item){
    $("#operation_table").find('tbody')
        .append($('<tr><td>'+item.username+'</td><td>'+item.math_op+'</td><td>'+item.result+'</td></tr>'))
}

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
        success: async function(data) {
            $("#operation_table").find('tbody')
                .append($('<tr><td>'+data.username+'</td><td>'+data.operation+'</td><td>'+data.result+'</td></tr>'))
        },
        contentType: "application/json",
        dataType: 'json'
    });
}