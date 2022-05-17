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
            return;
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
}