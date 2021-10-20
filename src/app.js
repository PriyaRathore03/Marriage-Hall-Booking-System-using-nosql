const express =require ("express");
const path = require("path");
require("./db/conn")
const Register = require("./models/register")
const User = require("./models/usermessage")
const bcrypt = require("bcryptjs")
const app = express();
const port = process.env.PORT || 3000;
const userController = require('../controllers/userController');

//setting the path
 const staticpath =  path.join(__dirname, "../public");
 

//middleware
app.use('css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('css', express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.use('/user', userController);
app.set("view engine", "hbs")

//routing
//app.get( path, callback )
app.get("/",(req,res)=> {
    res.render("index");
})

app.get("/portfolio",(req,res)=> {
    res.render("portfolio");
})

app.get("/halls",(req,res)=> {
    res.render("halls");
})

app.get("/bb",(req,res)=> {
    res.render("bb");
})

app.get("/admin",(req,res)=>{
    res.render("admin");
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/bb",async(req,res)=>{
    try{
       // res.send(req.body);
       const userData = new User(req.body);
       await userData.save();
       res.status(201).render("index")
    }catch(error){
        res.status(500).send(error);
    }
})
app.post("/register", async(req,res)=>{
    try {
         const password = req.body.password;
         const confirmPassword = req.body.cpassword;
         if(password === confirmPassword){
             const userRegister = new Register ({
                 firstname:req.body.firstname,
                 lastname:req.body.lastname,
                 email:req.body.email,
                 password:req.body.password,
                 cpassword:req.body.cpassword
             })
            console.log("the succcess part" +userRegister);
             const token =await userRegister.generateAuthToken();
            console.log("the token part" +token)

            const registered = await userRegister.save();
            console.log("the page part" +token)
            res.status(201).render("login");

         }else{
             res.send("password does not match");
         }
       
    } catch (error) {
        res.status(400).send(error);
        console.log("the error part page")
    }
})

//login check
app.post("/login", async(req,res)=>{
    try {
        const email= req.body.email;
        const password=req.body.password;
        
        const useremail= await Register.findOne({email:email});
        const isMatch = bcrypt.compare(password, useremail.password);
        if(isMatch){
            res.status(201).render("bb");
        }else{
            res.send("invalid login details");
        }
       

    } catch (error) {
        res.status(400).send("invalid plogin details");
    }
})


//server create
app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})
