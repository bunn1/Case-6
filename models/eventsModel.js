// func skriva o läsa från databasen

// {datetime: "2022-05-01T13:20:00.000Z", description: "Gå och diska"}


import fs from 'fs';

// Shortcut "Path"
const dbPath = "./calenderdb.json"

const eventModel = {
    // Function to get Date and Time -----------------------------
    getAllEvents: function () {
        // Convert JSON file to javascript and be able to read it -------------
       
        return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    },
    addEvent: function (dateTime, author) {

        // Method to write new date and time quote into database -------------------

        const allDateTime = this.getDateTime();
      

        // Create new dateTime object
        const newDateTime = {
            dateTime,
            author
        }
 }
}

export default eventModel;






// for (let i = 0; i < myObj.datetime.length; i++) {
//     x += myObj.datetime[i];
// }