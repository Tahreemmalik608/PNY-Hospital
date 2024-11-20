const mongoose=require("mongoose")

const servicesSchema=mongoose.Schema({
title:{
    type:String
},
ext:{
    type:String
},
description:{
    type:String
},
image:{
    type:String
},
doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
}
},
{timestamps:true}
)

module.exports=mongoose.model("Services",servicesSchema);