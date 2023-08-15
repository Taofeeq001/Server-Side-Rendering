const bodyParser = require("body-parser")
const express = require("express")
const port = 1200
const app = express()


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res)=>{
    
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + "/public/login.html")
})
app.post("/login", (req, res)=>{
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone_number;
    const address = req.body.address;

    console.log(req.body)

    res.send(`You have successfully inputed all the information needed. We would get back to ${email} and also contact this ${phone} for further info. Thanks!!`)
})
app.get('/bmi', (req, res)=>{
    res.sendFile(__dirname + "/public/bmi.html")
})
app.post("/bmi", (req, res)=>{
    const height = parseInt(req.body.height);
    const weight = parseFloat(req.body.weight);
    const hg = height*height
    const calculate = weight/hg
    // const rand = Math.round(calculate)
    console.log(req.body)
    if(!height && !weight){
        res.redirect("/bmi")
    }
    else if(calculate >= 18.5 <= 24.9){
        res.send(`Your BMI is ${calculate} and falls within the healthy range`)
    }
    else if(calculate >= 25 <=29.9){
        res.send(`Your BMI is ${calculate} and falls within the overweight range`)

    }
    else{
        res.send(`Your BMI is ${calculate} and falls within the Obese range`)
    }
})

app.listen(port, ()=>{
    console.log(`This app is running on ${port}`)
})