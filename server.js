import express from 'express';
import ejs from 'ejs';
import http from 'http';
import eventsModel from './models/eventsModel.js'
import eventController from './controllers/eventController.js'

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

// Handle form Post
app.use(express.urlencoded({ extended: true }));


// Must have so Css works
app.use(express.static("."));
// Must have so Css works
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

// app.get("/", (req, res) => {
//     res.send('hell0o')
// })

app.get('/index', (req, res) => {
    let events = eventsModel.readEvents();
    res.render('index', {
        events : events
    })
})

app.post('/index', eventController.createEvent);


// For Delete
app.delete('/index/:id', eventController.deleteEvent);

// For Update/Edit function
app.put('/events/:id', eventController.updateEvent);

// app.put('/events/:id', eventController.updateEvent);

// app.deleteEvent({ id: '1' }, (error, _) => {
//     if (!error) {
//       console.log('Event Has been successfully deleted')
//     } else {
//       console.error(error)
//     }
//   })

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
app.use(express.static('index'));

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