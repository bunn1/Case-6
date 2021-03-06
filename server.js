import express from 'express';
import ejs from 'ejs';
import http from 'http';
import eventsModel from './models/eventsModel.js'
import eventController from './controllers/eventController.js'
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
app.use(express.json());
// Must have so Css works
app.use(express.static("."));
// Must have so Css works
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });
// app.get("/", (req, res) => {
//     res.send('hell0o')
// })
// app.get('/index', (req, res) => {
//     let events = eventsModel.getAll();
//     res.render('index', {
//         events : events
//     })
// })





// app.get('/index/:date', eventController.weekEvents);

// Route request
app.get('/', (req, res) => {
    res.render('firstPage');
});

app.get('/firstPage', (req, res) => {
    res.render('firstPage');
});

app.get('/calendar/api', eventController.getApi);


// nytt
app.get('/calendar', eventController.getAll);




app.post('/calendar', eventController.createEvent);
// route to eventDelete
// app.delete('/deleteEvent/:id', eventController.deleteEvent); // Gammal kod --------------------------------
app.delete('/index/:id', eventController.deleteEvent); // Ny kod -------------------------------------
// router.delete('/deleteEvent/:id', eventController.deleteEvent);

// route to eventUpdate
// app.put('/index/:id', eventController.updateEvent); // Gammal kod ------------------------------

app.use(express.static('index'));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });

 
app.post('/events/:id', eventController.editEvent); // Ny kod ----------------------------------------

// app.put('/events/:id', eventController.updateEvent);

// app.deleteEvent({ id: '1' }, (error, _) => {
//     if (!error) {
//       console.log('Event Has been successfully deleted')
//     } else {
//       console.error(error)
//     }
//   })
// getAllPosts().then(response => {
//     console.log(response);
// }).catch(e => {
//     console.log(e);
// })



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


// console.log(quoteModel.getDateTime())