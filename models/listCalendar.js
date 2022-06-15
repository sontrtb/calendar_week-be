const Schema = require('../connectDB');
const mongoose = require('mongoose');

const calendarSchema = new Schema({
    title: String,
    listNote: Array,
    dayOfWeek: Number,
    time: Object,
    timeString: String, 
}, {
    collection: 'calendar'
});

const CalendarModel = mongoose.model('calendar', calendarSchema);

module.exports = CalendarModel;