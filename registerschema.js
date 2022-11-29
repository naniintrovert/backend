const mongoose=require("mongoose")

const newUserSchema={
	Username:String,
	password:String,

}
const Register=mongoose.model("students",newUserSchema)
module.exports=Register