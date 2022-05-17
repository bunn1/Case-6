// func skriva o läsa från databasen

// {datetime: "2022-05-01T13:20:00.000Z", description: "Gå och diska"}


import fs from 'fs';
// import events from 'events';

// Shortcut "Path"
const dbPath = "./calenderdb.json"

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

const dbpath = "./calenderdb.json";

const eventModel = {

    readEvents: function () {
        return JSON.parse(fs.readFileSync(dbpath, "utf-8"));
    },
    getEvent: function (id) {
        return this.readEvents().find((event) => event.id === id);
    },
    saveEvent: function (events) {
        return fs.writeFileSync(dbpath, JSON.stringify(events));
    },
    addEvent: function (title, date) {
        const allEvents = this.readEvents();
        const lastEvent = allEvents[allEvents.length - 1];
        const newId = (lastEvent?.id || 0) + 1;

        const newEvent = {
            id: newId,
            title,
            date
        };

        allEvents.push(newEvent);

        this.saveEvent(allEvents);

        return true;
    }
}

export default eventModel;