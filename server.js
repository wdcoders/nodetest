const express = require('express');
const app = express();


app.get('/',(req, res) => {
    res.send('Welcome this is node js test project');
})

app.listen(3300, function(req, res){
    console.log('Server port listening');
})