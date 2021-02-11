console.log("yo");

function liveTime () {
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    