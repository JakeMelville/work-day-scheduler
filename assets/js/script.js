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





console.log(textInput);


function liveTime() {
    var currentDay = moment().format("dddd, MMMM Do, YYYY");
    $("#current-date").text(currentDay);
}
liveTime();



//check for button clicks inside an on-click
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



//write a function to update the hours in the time blocks 
//grey was passed, red is current, green is future 


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


//load any saved data from local storage 
// $("#hour-9 .task").val(localStorage.getItem("hour-9"))
// $("#")



    //display current day on the page- using moment







//     $(".saveBtn").on("click", function () {

//         var time = moment().format("hh:mm A");
//         var text = $(".textInput").val();

//     localStorage.setItem(time, text) //pass in the 2 variables for time and text
// });

