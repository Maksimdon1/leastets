const express = require('express')
const app = express()
app.get("/server/temp", function(req, res) {
    res.send('123')

});
app.get("/", function(req, res) {
    res.send('12333333')

});

app.listen(process.env.PORT || 3000)
