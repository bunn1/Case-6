// func skriva o läsa från databasen

// {datetime: "2022-05-01T13:20:00.000Z", description: "Gå och diska"}


import fs from 'fs';

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


    editEvent: function (id, newTitle, newDate) {
        const allEvents = this.getAll();
        // const leg = allEvents.findIndex((event) => event.id === id);
       
        for (let i = 0; i < allEvents.length; i++) {
            const currentEvent = allEvents[i];
            console.log(currentEvent.id, id)


            if (currentEvent.id == id){ 
                console.log("find a match")
            allEvents[i].title = newTitle;
            allEvents[i].date = newDate;
            break;
            }
        }
            
        console.log(allEvents)
     
        this.saveEvent(allEvents);

        return true;
    }
}

export default eventsModel;