fetch("/calendar/api", {
    method: "GET"
  })
  .then(function (response) {
   console.log("hej då")

    return response.json();
  })
  .then(function (events) { // uppdate my savedEvents array
    savedEvents = events
    console.log(savedEvents, events)
  showWeekDates(calendarDates);
  });

  datum.setDate(datum.getDate() + 1)

  console.log("savedEvents", savedEvents)


function showWeekDates(dates) {
    // radera alla li elements
    calendarElement.innerText = "";
    dates.forEach(element => {
      // skapa ett list elelemt
      let li = document.createElement("li");

      li.classList.add("listItem")

      // let span = document.createElement("span");
      // ange innehåll
      li.innerText = element;
      // lägg till det omslutande ul elementet
      calendarElement.appendChild(li);

      //   //  Insert title and date in browser
      let result = savedEvents.events.filter((ele) => {
        
        
      })
      if (result.length > 0) { 
        return ele.date === element; 
      }
    });
  }