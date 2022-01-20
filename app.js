const express = require('express'); 
const path = require('path');
const app = express();

app.get("/",(req,res)=> {
    // res.send("hello world");
    // res.sendFile("C:/Users/sofia/Documents/proyectos/js-projects/express-server/index.html")
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(3000,()=>{
    console.log('server running on port', 3000);
});