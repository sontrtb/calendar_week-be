const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

app.use(cors());

const CalendarModel = require('./models/listCalendar');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// get all data
app.get('/api/v1', (req, res) => {
  CalendarModel.find({})
  .then(data => {
    res.status(200).json(data)
    console.log(data);
  })
  .catch(err => res.status(500).json(err));
})

// get data day of week
app.get('/api/v1/:dayOfWeek', (req, res) => {
  const dayOfWeek = req.params.dayOfWeek
  CalendarModel.find({
    dayOfWeek: dayOfWeek
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => res.status(500).json(err));
})

// post
app.post('/api/v1', (req, res) => {
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
app.delete('/api/v1/:id', (req, res) => {
  const id = req.params.id
  CalendarModel.deleteOne({
    _id: id
  })
  .then( res.status(200).json('delete success') )
  .catch(err => res.status(500).json(err));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})