const Services = require("../models/services.model");

exports.store = async (req, res) => {
  try {
    req.body.image=req.file.filename;
    const services = await Services.create(req.body);
    res.json({
      messsage: "Services Created Successfully",
      status: 200,
      success: true,
      services,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.index = async (req, res) => {
  try {
    const services = await Services.find().populate('doctorId');
    return res.json({
      message: "Services Fetch Successfully",
      status: 200,
      success: true,
      services,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.get = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Services.findOne({ _id: id });
    if (!service) {
      return res.json({
        message: "Services Not Found",
        status: 404,
        success: false,
      });
    }
    return res.json({
      message: "Services Fetched Successfully!",
      status: 200,
      success: true,
      service,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Services.findOneAndDelete({ _id: id });
    if (!service) {
      return res.json({
        message: "Service Not Found",
        status: 404,
        success: false,
      });
    }
    return res.json({
      message: "services Deleted Successfully!",
      status: 200,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Services.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!service) {
      return res.json({
        message: "Service Not Found",
        success: false,
        status: 404,
      });
    }
    return res.json({
      message: "Service Updated Successfully",
      success: true,
      status: 200,
    });
  } catch (err) {
    console.log(err);
  }
};
