const mongoose =require("mongoose")

const connectDb=async()=>{
    try{
await mongoose.connect("mongodb://localhost:27017")
console.log("MongoDb Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports=connectDb;