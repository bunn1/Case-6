// func skriva o läsa från databasen

// {datetime: "2022-05-01T13:20:00.000Z", description: "Gå och diska"}


import fs from 'fs';
// import events from 'events';

// Shortcut "Path"
const dbPath = "./calenderdb.json"

const eventModel = {
    // Function to get Date and Time -----------------------------
    getAllEvents: function () {
        // Convert JSON file to javascript and be able to read it -------------   
        return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    },

    getEvent: function (id) {
        return this.getEvent().find((event) => event.id === id)
    },

    addEvent: function (dateTime, author) {

        // Method to write new date and time quote into database -------------------

        const allDateTime = this.getDateTime();
      
    
        // Create new dateTime object
        const newDateTime = {
            
           
            // dateTime,
            // author
        }
 }
} 


//------------------------------------------
// let emitter = new events.EventEmitter();

// emitter.on('newEvent', (makeEvent) => {
	
// 	console.log(`makeEvent : ${message}`);
// });

// emitter.emit('newEvent', 'Hello guys, this is CodezUp');

//------------------------------------------------




//-------------------------------------------
// import inquirer from 'inquirer';

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's Your Event?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });

//------------------------------------------

//-------------------------------------------

// get the reference of EventEmitter class of events module
// import events from 'events';

// //create an object of EventEmitter class by using above reference
// let em = new events.EventEmitter();

// //Subscribe for FirstEvent
// em.on('FirstEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// // Raising FirstEvent
// em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// //------------------------------


export default eventModel;





