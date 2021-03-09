$(document).ready(function () {
  // using a tool called moment to get the current date
  const today = moment().format("MMM Do, YYYY");
  $("#currentDay").text(today);
  // using moment to get the current hour
  //parseInt(+moment().format("H"))?
  let currentHour = +moment().format("H");

  //linking to the html side
  const $timeSlots = $("#time-slot");

  
  // a for loop, looping over numbers from 5 to 17
  for (let i = 7; i <= 17; i++) {
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

  
  // save the endusers entrys
  $(".saveBtn").on("click", function (e) {
    e.preventDefault();
    var time = $(this).parent().attr("id")
    var description = $(this).siblings(".description").val()
    localStorage.setItem(time, description);
    
  });
  

//retieve the enduser endput and put it on the page and leave it there 
    $(".time-block").each (function(){

      var storedDescription = localStorage.getItem(id)
      var id = $(this).attr("id")
   
      $(this).children(id).val(storedDescription) 
      var timeSlots = id.replace("hour-", "")
      localStorage.getItem(storedDescription, timeSlots)
    })

  
  

});


