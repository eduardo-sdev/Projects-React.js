const express = require('express')
const app = express()

const PORT = 3000
const path = require("path")
const routes = require('./src/routes/routes')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))
app.use(routes)


app.listen(PORT)

