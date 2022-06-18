const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

const calendarRouter = require('./routers/calendar');
const accountRouter = require('./routers/account');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/calendar', calendarRouter);
app.use('/api/account', accountRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})