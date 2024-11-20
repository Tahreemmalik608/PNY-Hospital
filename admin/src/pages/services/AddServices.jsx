import React, { useState, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
    const [formData, setFormData] = useState({
        title: "",
        ext: "",
        description: "",
        image: null,
        doctorId: "", // Added doctorId field
    });
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/doctor`);
            setDoctors(response.data.doctors);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDoctorChange = (e) => {
        setFormData({ ...formData, doctorId: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFormData = new FormData();
        newFormData.append("title", formData.title);
        newFormData.append("ext", formData.ext);
        newFormData.append("description", formData.description);
        newFormData.append("image", formData.image);
        newFormData.append("doctorId", formData.doctorId); // Add doctorId to the form data

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/service`, newFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.success) {
                toast.success("Service Created Successfully");
                setFormData({
                    title: '',
                    ext: '',
                    description: '',
                    image: null,
                    doctorId: '', // Reset doctorId
                });
                navigate("/services");
            }
        } catch (error) {
            console.error("Error creating service:", error);
            toast.error("Failed to create service");
        }
    };

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <form onSubmit={handleSubmit} style={{ marginLeft: "500px", marginTop: "50px" }}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ext">Ext:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="ext"
                            name="ext"
                            value={formData.ext}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "100px" }}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctorId">Doctor:</label>
                        <select
                            id="doctorId"
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleDoctorChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        >
                            <option value="">Select a doctor</option>
                            
                            {doctors?(doctors?.map((doctor) => (
                                <option key={doctor._id} value={doctor._id}>
                                    {doctor.name}
                                </option>
                            ))):null}
                        </select>
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
                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249' }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddServices;
