import express from 'express'

// import calender from 'routes';

const router = express.Router();
let obj = {navigationLinks: ["Start", "Calendar"], page:"calendar"};

router.route('/calendar')
.get((req, res) => {
    res.send('calendar')
// res.render('calendar', obj);
});

export default router;