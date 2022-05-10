import express from 'express';
import ejs from 'ejs';

// "app" environment
// -------------------------
const app = express();

// variables
// -------------------------
const port = 3000;

// set template engine to ejs
// -------------------------
app.set('view engine', 'ejs');

// use route modules
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);

import routeCalendar from './routes/calendar.js';
app.use('/calendar', routeCalendar);


// middleware (use param next...)
// -------------------------
// ...

// handle requests
// -------------------------

// route request
// -------------------------
app.get('/', (req, res) => {
res.render('index');
});

// serve static files
// -------------------------
app.use(express.static('public'));

// handle errors
// -------------------------

// 404 not found
// -------------------------
app.get('*', (req, res, next) => {
res.render('404');
});

// server error 500...
// -------------------------
app.use((err, req, res, next) => {

// show response
return res.status(500).send("Server error, please return later");
});

// start server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});