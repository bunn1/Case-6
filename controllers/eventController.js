
import eventsModel from "../models/eventsModel.js";


export default {

    // sätter title och date
    createEvent: (req, res) => {
        const title = req.body.title;
        const date = req.body.date;

        console.log(title, date);
// kollar om det gick att ladda
        const check = eventsModel.addEvent(title, date);

        if (!check) {
            res.render("404", {
                message: "Could not save"
            });
        }
        // skapa ett event som heter event / skapar ett object 
        res.redirect("/index")
       
    },
    getAllEvents: (req, res) => {
        res.render("index", {
            events: eventsModel.getAll()
        });
    },
    deleteEvent: (req, res) => {
        // const id = req.body.id;
        const id = Number(req.params.id);

        if (id < 0) {
            console.log("error") 
                 return
         }

        console.log(id)
      
        const check = eventsModel.deleteEvent(id); 

        // if (!check) {
        //     res.render("404", {
        //         message: "Could not delete"
        //     });
        // }
        res.redirect("/index")
    },

    updateEvent: (req, res) => {
        const id = Number(req.params.id);
        const title = req.body.title;
        const date = req.body.date;
        // const check = eventsModel.updateEvent(id, title, date); 

        console.log("ControllerEvent Was Called",req.body, id)
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

        res.redirect('/index');
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

