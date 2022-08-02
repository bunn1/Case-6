import eventsModel from "../models/eventsModel.js";

export default {
    getAll: (req, res) => {
        res.render("index", {
            events: eventsModel.getAll()
        });
    },
    getApi: (req, res) => {
        res.json({
            events: eventsModel.getAll()
        });
    },
    createEvent: (req, res) => {
        // Info som inkluderas i post req

        const title = req.body.title;
        const date = req.body.date;

        const check = eventsModel.addEvent(title, date);

        if (!check) {
            res.render("404", {
                message: "Could not save"
   
            });
            return;
        }
        // Går tillbaka till calendar
        res.redirect("/calendar");
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

        res.redirect("/calendar");
    },

    editEvent: (req, res) => {
        const id = Number(req.query.id);
        const title = req.body.title;
        const date = req.body.date;

        console.log(id)
        const check = eventsModel.editEvent(id, title, date);

        if (!check) {
            res.render("404", {
                message: "Could not save"
            });
            return;
        }
        res.redirect(303, '/calendar')
    },
}