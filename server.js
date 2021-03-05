const express = require('express');
const app = express();


app.get('/',(req, res) => {
    res.send('Welcome');
})

app.listen(3300, function(req, res){
    console.log('Server port listening');
})