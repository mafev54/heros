const express = require('express')
const mongoose = require('mongoose')

const heroRoutes = require('./routes/hero')
require('dotenv').config()

const app = express()
const port = (process.env.PORT || 3005)
app.set('port', port)

app.use(express.json())
app.use('/api/hero',heroRoutes)

app.get('/', (req, res) => {
  res.send('Hello Worldl11!')
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=>console.error(err.message))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})