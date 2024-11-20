const Doctor=require("../models/doctor.model")
const Contact=require("../models/contact.model")
exports.index = async (req, res) => {
    try {
        const doctors = await Doctor.find().countDocuments();
        const contacts = await Contact.find().countDocuments();
        const count={
            doctors,
            contacts
        }
        return res.json({ message: "Doctors Fetch Successfully", status: 200, success: true,count})
    }
    catch (err) {
        console.log(err)
    }
}
