const express = require('express')
const app = express();
const fs = require('fs');
const avaibleTime = require('./middleware')

app.get(('/'),avaibleTime,(req,res)=>{
    fs.readFile('./Home page/home.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    })
    app.use(express.static("home"));
});
app.get(('/services'),avaibleTime,(req,res)=>{
    fs.readFile('./Our services/services.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    })
    app.use(express.static("services"));
});

app.get(('/contacts'),avaibleTime,(req,res)=>{
    fs.readFile('./Contact Us/contactUs.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    })
    app.use(express.static("contacts"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => err ? console.error(err) : console.log(`server is running on port ${PORT}`));
