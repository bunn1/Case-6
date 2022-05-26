// func skriva o läsa från databasen

// {datetime: "2022-05-01T13:20:00.000Z", description: "Gå och diska"}


import fs from 'fs';
// import events from 'events';

// Shortcut "Path"
const data= "./calenderdb.json"

// const eventModel = {
//     // Function to get Date and Time -----------------------------
//     getAllEvents: function () {
//         // Convert JSON file to javascript and be able to read it -------------   
//         return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
//     },

//     getEvent: function (id) {
//         return this.getEvent().find((event) => event.id === id)
//     },

//     addEvent: function (dateTime, author) {

//         // Method to write new date and time quote into database -------------------

//         const allDateTime = this.getDateTime();


//         // Create new dateTime object
//         const newDateTime = {


//             // dateTime,
//             // author
//         }
//     }
// }
// export default eventModel;

// import fs from "fs";

const dbPath = "./calenderdb.json";

const eventsModel = {

    readEvents: function () {
        return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    },
    getEvent: function (id) {
        return this.readEvents().find((event) => event.id === id);
    },
    saveEvent: function (events) {
        return fs.writeFileSync(dbPath, JSON.stringify(events));
    },
    addEvent: function (title, date) {
        const allEvents = this.readEvents();
        const lastEvent = allEvents[allEvents.length - 1];
        const newId = (lastEvent ?.id || 0) + 1;

        const newEvent = {
            id: newId,
            title,
            date
        };
        // 
        allEvents.push(newEvent);
        // Save event
        this.saveEvent(allEvents);

        return true;
    },
    // Radera eventet
    deleteEvent: function (id) {
        const allEvents = this.readEvents();
        console.log("Delete Event Was Called ")
        // let newArray = allEvents.filter(function (element) {   
        //     return element.id !== id;
        // })
        let array1 = allEvents.filter((event) => event.id !== id);
        console.log("array1", array1);
        this.saveEvent(array1)

        },
        
    updateEvent: function (id, newTitle, newDate) {
        // Get all quotes
        const allEvents = this.readEvents();
    
        // if quotes are not defined we return false
        // to signal that something went wrong
        // if (!allEvents) {
        //   return false;
        // }
    
        // Update quote specified by id
        const idx = allEvents.findIndex((event) => event.id === id);
    
        if (idx < 0) {
          return false;
        }

        // Här sker uppdateringen
        allEvents[idx].title = newTitle;
        allEvents[idx].date = newDate;
    
        // Write new state to db
        this.saveEvent(allEvents);
    
        return true;
      }
    }

export default eventsModel;