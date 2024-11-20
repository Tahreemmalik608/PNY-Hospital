import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from 'react-toastify';

const UpdateService = () => {
    const [service, setService] = useState({});
    const params = useParams();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ext: '',
        image: '',
    });
    const navigate = useNavigate();

    const fetchService = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/service/${params.id}`);
        if (response.data.success) {
            const serviceData = response.data.service;
            setService(serviceData);
            setFormData({
                title: serviceData.title,
                description: serviceData.description,
                ext: serviceData.ext,
                image: serviceData.image,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        fetchService();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/service/${params.id}`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/services");
            } else {
                alert('Error updating service');
            }
        } catch (error) {
            console.error("Error updating service:", error);
        }
    };

    const { title, description, ext, image } = formData;

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
                            placeholder="Enter Service Title"
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            placeholder="Enter Service Description"
                            type="text"
                            id="description"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ext">EXT:</label>
                        <input
                            placeholder="Enter EXT"
                            type="text"
                            id="ext"
                            name="ext"
                            value={ext}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL:</label>
                        <input
                            placeholder="Enter Image URL"
                            type="text"
                            id="image"
                            name="image"
                            value={image}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;