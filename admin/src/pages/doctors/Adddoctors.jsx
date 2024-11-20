import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    education: "",
    image: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (event) => {
    setFormData({ ...formData, gender: event.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const newFormData = new FormData();
  newFormData.append("name", formData.name);
  newFormData.append("email", formData.email);
  newFormData.append("phone", formData.phone);
  newFormData.append("gender", formData.gender);
  newFormData.append("education", formData.education);
  newFormData.append("image", formData.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post
      (`${process.env.REACT_APP_BASE_URL}/doctor`,
      newFormData
    );
    if (response.data.success) {
      toast.success(response.data.message);
      navigate("/doctors");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        education: "",
        image: "",
      });
    } else {
      toast.warning(response.data.message);
    }
  };
  const { name, email, phone, gender, education } = formData;

  return (
    <div style={{ marginLeft: "200px" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ marginLeft: "500px", marginTop: "50px" }}
        >
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input
              placeholder="Enter Here"
              type="text"
              id="Name"
              name="name"
              value={name}
              onChange={handleChange}
              required
              style={{ width: "250px", height: "50px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Education:</label>
            <input
              placeholder="Enter Here"
              type="text"
              id="education"
              name="education"
              value={education}
              onChange={handleChange}
              required
              style={{ width: "250px", height: "50px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              placeholder="Enter Here"
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              style={{ width: "250px", height: "50px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Enter Here"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              style={{ width: "250px", height: "50px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Choose Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
              style={{ width: "250px" }}
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <label>Gender:</label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                <span style={{ marginLeft: "10px" }}>Male</span>
              </label>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                <span style={{ marginLeft: "10px" }}>Female</span>
              </label>
            </div>
          </div>
          {/* <div className="form-group">
                        <label htmlFor="image">Choose Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                            style={{ width: "250px" }} 
                        />
                    </div> */}
          <button
            type="submit"
            style={{ width: "250px", backgroundColor: "#020249" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
