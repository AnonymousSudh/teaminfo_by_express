const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 8000;


// built in middleware
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));


// to set the hbs engine
app.set('view engine', 'hbs');
 
app.get("", (req, res) =>{
    res.render("index");
});

app.get("/about" ,(req,res)=>{
    res.render("about");
    
});
app.get("/about/*" ,(req,res)=>{
    res.render("404");
    
});
app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port,() =>{
    console.log(`listning to port no ${port}`);
})

