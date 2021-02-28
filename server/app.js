const express = require('express')
const router = require('./router')
const port = 3001;
const app = express()


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)
// app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
