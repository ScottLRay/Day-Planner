$(document).ready(function () {
  // using a tool called moment to get the current date
  const today = moment().format("MMM Do, YYYY");
  $("#currentDay").text(today);
  // using moment to get the current hour
  let currentHour = +moment().format("H");

  //linking to the html side
  const $timeSlots = $("#time-slot");

  
  // a for loop, looping over numbers from 5 to 17
  for (let i = 5; i <= 17; i++) {
    $timeSlots.append(buildTimeSlot(i));
  }

  // function of building the html in js
  function buildTimeSlot(hour) {
    // if statements showing past, present and future in differnet colors
    var background = "background-color";
    if (currentHour === hour) {
      background = "present";
    } else if (currentHour > hour) {
      background = "past";
    } else {
      background = "future";
    }
    // actual js code building html
    var $timeSlots = $("<div>")
      .addClass("row time-block")
      .attr("id", `hour-${hour}`);
    var $hour = $("<div>").addClass("col-md-1 hour").text(hour);
    var $textArea = $("<textarea>").addClass(
      "col-md-10 description " + background
    );
    var $button = $("<button>")
      .addClass("btn saveBtn col-md-1")
      //fas and fas-save is the save btn icon
      .append($("<i>").addClass("fas fa-save"));
    //appending the code to the page
    return $timeSlots.append($hour, $textArea, $button);
    
  }

   var description = document.querySelectorAll(".description")
  // save the endusers entrys
  $(".saveBtn").on("click", function (e) {
    e.preventDefault();
    localStorage.setItem("description", JSON.stringify(description));
    
  });
  console.log(localStorage);


// localStorage.getItem("description", JSON.parse(val))


});


