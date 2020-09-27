const express = require('express');
const app = express();

const port = 3000;

app.use('',express.static('public'));


app.get('/hello',(req,res)=>{
    res.send("sample text");    
});

var sampleData = require('./sampleData.json');
app.get('/budget',(req,res)=>{
    console.log(sampleData);
    res.json(sampleData);    
})

app.listen(port,()=>{
    console.log("App is running on port "+port);
});