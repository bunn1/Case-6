import express from "express";

import eventModel from "../models/eventsModel.js";


export default {
    createEvent: (req, res) => {
        const title = req.body.title;
        const date = req.body.date;

        console.log(title, date);

        const check = eventModel.addEvent(title, date);

        if (!check) {
            res.render("404", {
                message: "Could not save"
            });
        }
        // skapa ett event som heter event / skapar ett object 
        res.render("index", {
            events: eventModel.readEvents()
        });
    },
    getAllEvents: (req, res) => {
        res.render("index", {
            events: eventModel.readEvents()
        });
    },
    deleteEvent: (req, res) => {
        const id = req.body.id;
        // const id = Number(req.params.id);
        console.log(id)
        const check = eventModel.deleteEvent(id); 
    }

    

    // today.setDate(today.getDate() - today.getDay() + 1 )





//     deleteEvent:(req, res) => {

//         var params = {
//           calendarId: 'id',
//           eventId: eventId,
//         }
    
//         calendar.events.delete(params, function(err) {
//           if (err) {
//             console.log('The server returned an error: ' + err);
//             return;
//           }
//           console.log('Event deleted.');
// //         });
//     }
}

