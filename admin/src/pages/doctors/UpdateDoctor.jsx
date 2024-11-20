import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from 'react-toastify';

const UpdateDoctor = () => {
    const [doctor, setDoctor] = useState({});
    const params = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: "",
        gender: "",
        education: '',
        image: "",
    });
    const navigate = useNavigate();
    const fetchDoctor = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/doctor/${params.id}`)
        if (response.data.success) {
            const doctorData = response.data.doctor;
            setDoctor(doctorData);
            setFormData({
                name: doctorData.name,
                email: doctorData.email,
                phone: doctorData.phone,
                gender: doctorData.gender,
                education: doctorData.education,
                image: doctorData.image,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        fetchDoctor();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/doctor/${params.id}`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/doctors")
            } else {
                alert('Error updating doctor');
            }
        } catch (error) {
            console.error("Error updating doctor:", error);
        }
    };

    const { name, email, phone, gender, education } = formData;

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <form onSubmit={handleSubmit} style={{ marginLeft: "500px", marginTop: "50px" }}>
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
                    <div>
                        <label>
                            <input type='radio' name='gender' value={"Male"} checked={gender === "Male"} onChange={handleChange} />
                            <label>Male</label>
                            <input type='radio' name='gender' value={"Female"} checked={gender === "Female"} onChange={handleChange} />
                            <label>Female</label>
                        </label>
                    </div>
                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateDoctor