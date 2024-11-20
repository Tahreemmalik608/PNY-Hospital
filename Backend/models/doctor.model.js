const mongoose=require("mongoose")

const doctorSchema=mongoose.Schema({
name:{
    type:String
},
email:{
    type:String
},
phone:{
    type:String
},
gender:{
    type:String
},
education:{
    type:String
},
image:{
    type:String
}    
})

module.exports=mongoose.model("Doctor",doctorSchema);