import express from "express";

import eventsModel from "../models/eventsModel.js";


export default {
    createEvent: (req, res) => {
        const title = req.body.title;
        const date = req.body.date;

        console.log(title, date);

        const check = eventsModel.addEvent(title, date);

        if (!check) {
            res.render("404", {
                message: "Could not save"
            });
        }
        // skapa ett event som heter event / skapar ett object 
        res.render("index", {
            events: eventsModel.readEvents()
        });
    },
    getAllEvents: (req, res) => {
        res.render("index", {
            events: eventsModel.readEvents()
        });
    },
    deleteEvent: (req, res) => {
        // const id = req.body.id;
        const id = Number(req.params.id);
        console.log(id)
        const check = eventsModel.deleteEvent(id); 
    },

    updateEvent: (req, res) => {
        const id = Number(req.params.id);
        const title = req.body.title;
        const date = req.body.date;
        console.log("ControllerEvent Was Called",req.body)
        if (id < 0) {
            return false
        }

        if (!title || !date) {
            console.log("Title and Date is not defined", title, date);
            return;
        }
        const isOK = eventsModel.updateEvent(id, title, date);

        if (!isOK) {
            console.log("Title and Date not Updated");
            return;
        }
        console.log("Title Updated");

        res.redirect('./index');
    },

    
    

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

