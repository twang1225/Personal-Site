var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Ting!')
})

app.listen(8000, function () {
  console.log('char-sortinator listening on port 8000!')
})