const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const register=require("./registerschema.js")
const port=3000;


app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://Harshanaga:Harsha202349@cluster0.edn4efb.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
	    console.log("Connection succussfully")
})
 	.catch((err)=>{
 		console.log(err)
 	})

app.get("/",(req,res)=>{
	res.send("bsl_7beatz")
})
app.post("/register",(req,res)=>{
		//const {email,passcode}=req.body;
		const email="harsha124@gmailcom",passcode="001155"
		const newFrontendUesr=new register({
			username:email,
			password:passcode

		})
	newFrontendUesr.save()


})
app.listen(port,()=>console.log("server is running on port",port))