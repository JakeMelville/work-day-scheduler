var today = new Date();
var currentTime = today.getHours();
var textInput = document.querySelector(".textInput");
var nineEl = document.querySelector(".nine");
var tenEl = document.querySelector(".ten"); 
var elevenEl = document.querySelector(".eleven");
var twelveEl = document.querySelector(".twelve");
var oneEl = document.querySelector(".one");
var twoEl = document.querySelector(".two");
var threeEl = document.querySelector(".three");
var fourEl = document.querySelector(".four");
var fiveEl = document.querySelector(".five");







console.log(currentTime);


function liveTime() {
    var currentDay = moment().format("dddd, MMMM Do, YYYY");
    $("#current-date").text(currentDay);
}
liveTime();



//check for button clicks inside an on-click

$(".saveBtn").on("click", function () {
    //grab my values for time and text

    var time = moment().format("hh:mm A");
    var text = $(".textInput").val();

    //save them to local storage

    localStorage.setItem(time, text) //pass in the 2 variables for time and text
});


//write a function to update the hours in the time blocks 
//grey was passed, red is current, green is future 

//    function plannerColor() {
//        if (currentTime)
//    }

function colorChange() {

    if (currentTime > 17) {
        nineEl.classList.add("grey");
        tenEl.classList.add("grey");
        elevenEl.classList.add("grey");
        twelveEl.classList.add("grey");
        oneEl.classList.add("grey");
        twoEl.classList.add("grey");
        threeEl.classList.add("grey");
        fourEl.classList.add("grey");
        fiveEl.classList.add("grey");
    }

    if (currentTime < 9) {
        nineEl.classList.add("green");
        tenEl.classList.add("green");
        elevenEl.classList.add("green");
        twelveEl.classList.add("green");
        oneEl.classList.add("green");
        twoEl.classList.add("green");
        threeEl.classList.add("green");
        fourEl.classList.add("green");
        fiveEl.classList.add("green");
    }
}
colorChange();
console.log($("hour"))
console.log(textInput.getAttribute("background"));


//using moment we need to get the current time 

//loop over the timeblocks- **hint** look up .each 


//check to see if we have moved past the current time
//if 
//addClass- .past       addClass("past")<-- how it should look



//check to see if it is the current time
//else if 
//removeClass ,past
//addClass .present



//check to see if it time is future 
//esle
//removeClass .past
//removeClass .present
//addClass .future




//load any saved data from local storage 
$("#hour-9 .task").val(localStorage.getItem("hour-9"))



    //display current day on the page- using moment









    // + ":" + today.getMinutes() + ":" + today.getSeconds()








