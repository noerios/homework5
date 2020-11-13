var currentDay= document.getElementById("currentDay");
var currentTime= document.getElementById("currentTime");
//var rowTime= document.getElementById("hour");
//var rowSection= document.getElementById("row");



currentDay.append("Today is" +" " +moment().format('dddd'))
currentTime.append(moment().format('LT'))

var timeNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

function init() {
    for(var i = 0; i < time.length; i++) {
        $('.container').append(`
        <div class="row custom-row">
        <div class="time-block">
          <p><span class="hour" datatime="${timeNumber[i]}"></span>${time[i]}</p>
        </div>
        <div class="col-10">
          <textarea class="description col-12">user input text here</textarea> 
        </div>
        <button class="saveBtn">
          Save
        </button>
      </div>
        `);
    }

    $('.hour').each(function() {
        var comparedHour = $(this).attr('datatime');
        var currentHour = moment().hour()
    
        if (comparedHour < currentHour) {
            $(this).parent().parent().next().children('textarea').addClass('past');
        }
        else if (comparedHour > currentHour) {
            $(this).parent().parent().next().children('textarea').addClass('future');
        }
        else if (comparedHour = currentHour) {
            $(this).parent().parent().next().children('textarea').addClass('future');
        }
        
    })
}

init();




//put rows into an array?
// foreach??


//create a function that compares currentTime to rowTime
//for loop goes through the rows and compares time to current time
    //if rowTime is equal to currentTime - turn row red
    //if rowTime is greater than currentTime - turn row green
    //if rowTime is less than currentTime - turn row gray
//if ( rowTime > currentTime) {
//    console.log("True")

//rowSection.style.backgroundColor = "red";
//}
//else console.log("False")

//store user input on local storage
// .parseInt to change string to number