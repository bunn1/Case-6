import eventsModel from "../models/eventsModel.js";

// export default {

//     // sätter title och date
//     createEvent: (req, res) => {
//         const title = req.body.title;
//         const date = req.body.date;

//         console.log(title, date);
// // kollar om det gick att ladda
//         const check = eventsModel.addEvent(title, date);

//         if (!check) {
//             res.render("404", {
//                 message: "Could not save"
//             });
//         }
//         // skapa ett event som heter event / skapar ett object 
//         res.redirect("/index")
       
//     },
    // getAllEvents: (req, res) => {
    //     res.render("index", {
    //         events: eventsModel.getAll()
    //     });
    // },

    export default {
        getAll: (req,res) => {
            res.render("index", { events: eventsModel.getAll() });  
        },
        getApi: (req,res) => {
            res.json({ events: eventsModel.getAll() });  
        },
        createEvent: (req, res) => {
            const title = req.body.title;
            const date = req.body.date;
        
            const check = eventsModel.addEvent(title, date);
    
            if (!check) {
                res.render("404", { message: "Could not save" });
                return;
            }
    
            res.render("index", { events: eventsModel.getAll() });
        },

    deleteEvent: (req, res) => {
        // const id = req.body.id;
        const id = Number(req.params.id);

        if (id < 0) {
            console.log("error") 
                 return
         }

        const toBeRemoved = eventsModel.getEvent(id)
        const check = eventsModel.deleteEvent(id); 

        console.log(toBeRemoved);
        // if (!check) {
        //     res.render("404", {
        //         message: "Could not delete"
        //     });
        // }
        res.redirect("/index")
    },

    editEvent: (req, res) => {
        const id = Number(req.params.id);
        const title = req.body.title;
        const date = req.body.date;
       
        // console.log("ControllerEvent Was Called",req.body, id)
        // if (id < 0) {
        //     return false
        // }

        // if (!title || !date) {
        //     console.log("Title and Date is not defined", title, date);
        //     return;
        // }
        const check = eventsModel.editEvent(id, title, date);

        // if (!isOK) {
        //     console.log("Title and Date not Edited");
        //     return;
        // }
        // console.log("Title Updated");

        res.redirect('/index');
    },
}

