let date = new Date();
let dayOfWeek = date.getDay();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthElement = document.getElementById("month");
let yearElement = document.getElementById("year");
let weekElement = document.getElementById("week");
let savedEvents = [];

let calendarDates = weekDates(date);

fetch("/calendar/api", {
    method: "GET"
})
.then(function (response) {
    return response.json();
})
.then(function (events){
    savedEvents = events;
    currentWeek(calendarDates);
});

date.setDate(date.getDate());

function weekDates(date) {
    let day = new Date(date)
    let dayOfWeek = day.getDay();
    let weekBefore = -dayOfWeek;
    let weekAfter = 7 + weekBefore
    let dates = [];

    day.setDate(day.getDate() + weekBefore);

    for (let i = weekBefore; i < weekAfter; i++){
        day.setDate(day.getDate() + 1 );
        let yearMonthDay = day.toLocaleDateString()

        dates.push(yearMonthDay);
    }
    return dates;
}

const calendarWrapper = document.getElementById("calendarContainer");



const changeWeek = document.getElementById("changeWeek");

changeWeek.addEventListener("click",() => {
    let first =

})