var currentDay= document.getElementById("currentDay")
var currentTime= document.getElementById("currentTime")
var rowTime= document.getElementById("hour")

currentDay.append("Today is" +" " +moment().format('dddd'))
currentTime.append(moment().format('LT'))

//create a function that compares currentTime to rowTime
    //if rowTime is equal to currentTime - turn row red
    //if rowTime is greater than currentTime - turn row green
    //if rowTime is less than currentTime - turn row gray


//store user input on local storage