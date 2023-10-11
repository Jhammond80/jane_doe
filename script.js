console.log("Hello World!")

// Name Change for user card

var newName = document.querySelector("#janeDoe")

function changeName(element){
    newName.innerText = "James Bond"
}

// Accept and Decling // step away and take a break!!
// first attempt need to seperate buttons and not user (there are two accept buttons and two decline buttons
// both are doing the same functions so build function based on the buttons instead!)


// var reqConnections = document.querySelector("#reqCount");
// var yourConnections = document.querySelector("#connCount");

// function hideTodd(){
//     var todd = document.querySelector("#acceptDeclineBtnTodd");
//     todd.remove();
//     reqConnections.innerText--;
//     yourConnections.innerText++;


//     function hidePhill(){
//         var phill = document.querySelector("#acceptDeclineBtnPhill");
//         phill.remove();
//         reqConnections.innerText--;
//         yourConnections.innerText++;
//     }
// }

// accept button //

var reqConnections = document.querySelector("#reqCount");
var yourConnections = document.querySelector("#connCount");

function accept(){
    var profile=document.querySelector("#acceptDeclineBtn")
    profile.remove();
    yourConnections.innerText++;
    reqConnections.innerText--;
}

function decline(){
    var profile=document.querySelector("#acceptDeclineBtn")
    profile.remove()
    reqConnections.innerText--;
}