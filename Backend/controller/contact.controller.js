const Contact = require("../models/contact.model")

exports.store = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.json({ messsage: "contact Created Successfully", status: 200, success: true, contact })
    }
    catch (err) {
        console.log(err)
    }
}

exports.index = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.json({ message: "contacts Fetch Successfully", status: 200, success: true, contacts })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findOne({ _id: id })
        if (!contact) {
            return res.json({ message: "contact Not Found", status: 404, success: false })
        }
        return res.json({ message: "contact Fetched Successfully!", status: 200, success: true, contact })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findOneAndDelete({ _id: id })
        if (!contact) {
            return res.json({ message: "contact Not Found", status: 404, success: false })
        }
        return res.json({ message: "contact Deleted Successfully!", status: 200, success: true })
    }
    catch (err) {
        console.log(err)
    }
}


exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!contact) {
            return res.json({ message: "contact Not Found", success: false, status: 404 })
        }
        return res.json({ message: "contact Updated Successfully", success: true, status: 200 })
    }
    catch (err) {
        console.log(err)
    }
}