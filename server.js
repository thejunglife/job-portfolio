require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()

// middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 

// routes
require('./routes')(app)

// sends not found routes to server directly into homepage
app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

// connect to database
require('mongoose')
  .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI: 'mongodb://localhost/portfoliodb', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      app.listen(process.env.PORT || 3001)
    })
    .catch(e => console.error(e))
