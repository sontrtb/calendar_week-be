const express = require('express');
const router = express.Router();
const CalendarModel = require('../models/listCalendar');

// get all data
router.get('/', (req, res) => {
CalendarModel.find({})
.then(data => {
    res.status(200).json(data)
    console.log(data);
})
.catch(err => res.status(500).json(err));
})

// get data day of week
router.get('/:dayOfWeek', (req, res) => {
const dayOfWeek = req.params.dayOfWeek
CalendarModel.find({
    dayOfWeek: dayOfWeek
}).sort({time: 1})
.then(data => {
    res.status(200).json(data)
})
.catch(err => res.status(500).json(err));
})

// post
router.post('/', (req, res) => {
CalendarModel.create({
    title: req.body.title,
    listNote: req.body.listNote,
    dayOfWeek: req.body.dayOfWeek,
    time: req.body.time,
    timeString: req.body.timeString
})
.then(data => {
    res.status(200).json(data)
})
.catch(err => res.status(500).json(err));
})

// delete
router.delete('/:id', (req, res) => {
const id = req.params.id
CalendarModel.deleteOne({
    _id: id
})
.then( res.status(200).json('delete success') )
.catch(err => res.status(500).json(err));
})


module.exports = router;