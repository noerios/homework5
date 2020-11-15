//setting the jumbotron time elements

var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");




currentDay.append("Today is" +" " +moment().format('dddd'))
currentTime.append(moment().format('LT'))

var timeNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

function init() {
    for(var i = 0; i < time.length; i++) {
        $('.container').append(`
        <div class="row custom-row row-no-gutters">
            <div class="time-block col-1">
                <p><span class="hour" datatime="${timeNumber[i]}"></span>${time[i]}</p>
            </div>
            <div class="col-10 custom-column id="input" "><textarea class="description col-12">add your tasks here</textarea></div>
            <button class="saveBtn col-1">Save</button>
        </div>
        `);
    }
//updting row color based on past, present, or future
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
            $(this).parent().parent().next().children('textarea').addClass('present');
        }
        
    })
}

init();

var saveButton = document.getElementsByClassName(".saveBtn");

function saveTasks() {
    var tasks = localStorage.getItem("input");

    userInput.textContent = task;
    console.log(task);
}

//store user input on local storage
saveButton.addEventListener("click", function() {
    var task = document.querySelector(".textarea").value;
    localStorage.setItem("task", task);
    console.log(task);
});

//     localStorage.setItem("9am", " ")
//     localStorage.setItem("10am", " ")


    // localStorage.setItem("user-input", " ");
    // document.getElementById("input").innerHTML =
    // localStorage.getItem("user-input");
    // console.log("user-input");
//}
