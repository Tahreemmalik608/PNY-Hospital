const Doctor = require("../models/doctor.model")

exports.store = async (req, res) => {
    try {
        req.body.image=req.file.filename;
        const doctor = await Doctor.create(req.body);
        res.json({ messsage: "Doctor Created Successfully", status: 200, success: true, doctor })
    }
    catch (err) {
        console.log(err)
    }
}

exports.index = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        return res.json({ message: "Doctors Fetch Successfully", status: 200, success: true, doctors })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findOne({ _id: id })
        if (!doctor) {
            return res.json({ message: "Doctor Not Found", status: 404, success: false })
        }
        return res.json({ message: "Doctor Fetched Successfully!", status: 200, success: true, doctor })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy=async(req,res)=>{
    try {
        const { id } = req.params;
        const doctor = await Doctor.findOneAndDelete({ _id: id })
        if (!doctor) {
            return res.json({ message: "Doctor Not Found", status: 404, success: false })
        }
        return res.json({ message: "Doctor Deleted Successfully!", status: 200, success: true })
    }
    catch(err){
        console.log(err)
    }
}


exports.update=async(req,res)=>{
    try{
const {id}=req.params;
const doctor=await Doctor.findOneAndUpdate({_id:id},req.body,{new:true})
if(!doctor){
    return res.json({message:"Doctor Not Found",success:false,status:404})
}
return res.json({message:"Doctor Updated Successfully",success:true,status:200})
    }
    catch(err){
        console.log(err)
    }
}