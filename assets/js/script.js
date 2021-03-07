
$(document).ready(function(){



// using a tool called moment to get the current date
const today = moment().format("MMM Do, YYYY");
$("#currentDay").text(today);
// using moment to get the current hour
let currentHour = +moment().format("H");

console.log(currentHour)

const $timeSlots = $("#time-slot");

const arrHour = [9,10,11,12,1,2,3,4,5]
// debugger

for (let i = 5; i < 17; i++) {
  $timeSlots.append(buildTimeSlot(i));
//   formatHour.currentHour.append()
}

// function formatHour(){
//     for (let i = 0; i < arrHour.length; i++) {
//         // const thisHour = arrHour[i]
//          $(".hour").append(arrHour[i])
    
//         return   
//     }
    
// }
// formatHour()


function buildTimeSlot(hour) {
  
    var background;
  if (currentHour === hour) {
    background = ".present";
  } else if (currentHour > hour) {
    background = ".past";
  } else {
    background = ".future";
  }

  var $timeSlots = $("<div>")
    .addClass("row time-block")
    .attr("id", `hour-${hour}`);
  var $hour = $("<div>").addClass("col-md-1 hour").text(currentHour)
  var $textArea = $("<textarea>").addClass(
    "col-md-10 description" + background
  );
  var $button = $("<button>")
    .addClass("btn saveBtn col-md-1")
    .append($("<i>").addClass("fas fa-save"));
   return $timeSlots.append($hour, $textArea, $button);
}

// $(".fa-save").on("click", function(e){
//     e.preventDefault();
//     localStorage.setItem("description", JSON.stringify)
// })
})









