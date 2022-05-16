import express from 'express';
import ejs from 'ejs';
import http from 'http';
import eventModel from './models/eventsModel.js'
// import * as calendar from '/routes/calendar.js'

// "app" environment
// -------------------------
const app = express();
// const calendar = require('./calendar.js');

// variables
// -------------------------
const port = 3000;

// set template engine to ejs
// -------------------------
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send('hell0o')
})

app.get('/calendar', (req, res) => {
    let events = eventModel.getAllEvents();
    res.render('calendar', {
        events : events
    })
})
// use route modules
// import routeStart from './routes/start.js';
// app.use('/start', routeStart);
// app.use('/', routeStart);

// import routeCalendar from './routes/calendar.js';
// import quoteModel from './models/eventsModel.js';
// app.use('/calendar', routeCalendar);


// middleware (use param next...)
// -------------------------
// ...

// handle requests
// -------------------------

// route request
// -------------------------
// app.get('/', (req, res) => {
// res.render('index');
// });

// 

// serve static files
// -------------------------
// app.use(express.static('public'));

// handle errors
// -------------------------

// 404 not found
// -------------------------
// app.get('*', (req, res, next) => {
// res.render('404');
// });

// server error 500...
// -------------------------
// app.use((err, req, res, next) => {

// // show response
// return res.status(500).send("Server error, please return later");
// });

// start server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

// console.log(quoteModel.getDateTime())