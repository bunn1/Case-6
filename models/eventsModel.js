// func skriva o läsa från databasen

// {datetime: "2022-05-01T13:20:00.000Z", description: "Gå och diska"}


import fs from 'fs';
// import events from 'events';

// Shortcut "Path"
// const data= "./calenderdb.json"

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

    getAll: function () {
        return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    },
    getEvent: function (id) {
        return this.getAll().find((event) => event.id === id);
    },
    saveEvent: function (events) {
        try {
            fs.writeFileSync(dbPath, JSON.stringify(events));
        } catch (error) {
            console.log("error", error);
        }
    },
    addEvent: function (title, date) {
        const allEvents = this.getAll();
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

    deleteEvent: function (id) { // Ny Kod ---------------------------------------------------------
        const allEvents = this.getAll();

        if (!allEvents) {
            return false;
        }
        const filteredEvents = allEvents.filter((event) => event.id !== id);

        this.saveEvent(filteredEvents);

        return true;
    },

    // updateEvent: function (id, newTitle, newDate) { Gammal kod ---------------------------------------
    //     // Get all quotes
    //     const allEvents = this.readEvents();

    //     // if quotes are not defined we return false
    //     // to signal that something went wrong
    //     // if (!allEvents) {
    //     //   return false;
    //     // }

    //     // Update quote specified by id
    //     const idx = allEvents.findIndex((event) => event.id === id);

    //     if (idx < 0) {
    //       return false;
    //     }

    //     // Här sker uppdateringen
    //     allEvents[idx].title = newTitle;
    //     allEvents[idx].date = newDate;

    //     // Write new state to db
    //     this.saveEvent(allEvents);

    //     return true;
    //   }
    // }

    editEvent: function (id, newTitle, newDate) {
        const allEvents = this.getAll();
        const leg = allEvents.findIndex((event) => event.id === id);

        if (!leg < 0) {
            return false;
        }

        allEvents[leg].title = newTitle;
        allEvents[leg].date = newDate;

        // Write new state to db
        this.saveEvent(allEvents);

        return true;
    }
}

export default eventsModel;