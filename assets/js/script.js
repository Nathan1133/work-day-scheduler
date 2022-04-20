let d = new Date();

let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();

let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + year;

$("#currentDay").text(`${output}`);


var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');
    console.log(currentTime);

    //get all one-hour time blocks with class "textarea"
    var timeBlockElements = $(".textarea");

    //loop through time block classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime 
setInterval(checkTime(), (1000 * 60) * 2);

// Saving tasks

const businessHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

var loadEvents = function() {
    $("#09").val(localStorage.getItem("hour-9"));
    $("#10").val(localStorage.getItem("hour-10"));
    $("#11").val(localStorage.getItem("hour-11"));
    $("#12").val(localStorage.getItem("hour-12"));
    $("#13").val(localStorage.getItem("hour-13"));
    $("#14").val(localStorage.getItem("hour-14"));
    $("#15").val(localStorage.getItem("hour-15"));
    $("#16").val(localStorage.getItem("hour-16"));
    $("#17").val(localStorage.getItem("hour-17"));
}

for (i = 0; i < businessHours.length; i++) {
    $(".saveBtn").click(function(event)  {
        var textValue = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id")
        console.log(time);
    
        localStorage.setItem(time, textValue);
    });
};

loadEvents()