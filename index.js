const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()

//middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

//env
const port = process.env.PORT || 8000
const URI = process.env.URI

//routes
const userRoute = require('./src/routes/userRoutes')
const authRoute = require('./src/routes/authRoutes')


app.use(`${URI}/users`, userRoute)
app.use(`${URI}/auth`, authRoute)




app.listen(port, ()=>{
    console.log(`Server running at Port ${port}`)
})