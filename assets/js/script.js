
//variables to get the current time only in hours
var today = new Date();
var currentTime = today.getHours();

//global variables used to access html elements
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





// console.log(textInput);

//this function sets the date at top of the page
function liveTime() {
    var currentDay = moment().format("dddd, MMMM Do, YYYY");
    $("#current-date").text(currentDay);
}
liveTime();



//check for button clicks inside an on-click
//everytime the save button is clicked the data will be stored in local storage
$(".saveBtn").on("click", function () {

    var time = "9am";
    var text = $(".nine").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "10am";
    var text = $(".ten").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "11am";
    var text = $(".eleven").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "12pm";
    var text = $(".twelve").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "1pm";
    var text = $(".one").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "2pm";
    var text = $(".two").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "3pm";
    var text = $(".three").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "4pm";
    var text = $(".four").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "5pm";
    var text = $(".five").val();

    localStorage.setItem(time, text)
});
$(".saveBtn").on("click", function () {

    var time = "9am";
    var text = $(".nine").val();

    localStorage.setItem(time, text)
});




//grey was passed, red is current, green is future 
//added if statements- if it is after 5pm all boxes go grey, if its before 9am all boxes will be green



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

//if else statment checking the time- depending on the time the text box will get a color
    if (currentTime < 10 && currentTime > 8) {
        nineEl.classList.add("red");
    }
    else if (currentTime < 11 && currentTime > 9) {
        tenEl.classList.add("red")
    }
    else if (currentTime < 12 && currentTime > 10) {
        elevenEl.classList.add("red")
    }
    else if (currentTime < 13 && currentTime > 11) {
        twelveEl.classList.add("red")
    }
    else if (currentTime < 14 && currentTime > 12) {
        oneEl.classList.add("red")
    }
    else if (currentTime < 15 && currentTime > 13) {
        twoEl.classList.add("red")
    }
    else if (currentTime < 16 && currentTime > 14) {
        threeEl.classList.add("red")
    }
    else if (currentTime < 17 && currentTime > 15) {
        fourEl.classList.add("red")
    }
    else if (currentTime < 18 && currentTime > 16) {
        fiveEl.classList.add("red")
    }
}

colorChange();
console.log($("hour"))
