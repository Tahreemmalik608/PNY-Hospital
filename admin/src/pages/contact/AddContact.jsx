import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        message: '',
        gender: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenderChange = (event) => {
        setFormData({ ...formData, gender: event.target.value });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/contact`, formData)
        if (response.data.success) {
            toast.success(response.data.message);
            navigate("/contact")
            setFormData({
                name: '',
                email: '',
                country: '',
                gender: '',
                message: '',

            });
        }
        else {
            toast.warning(response.data.message)
        }
    };
    const {name,email,country,gender,message}=formData;

    return (
        <div style={{ marginLeft: "200px" }}>
            <div className="background">
                <div className="blue-nav">
                    <FaRegCircleUser className="user" />
                </div>
                <form onSubmit={handleSubmit} style={{ marginLeft: "500px", marginTop: "50px" }}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            placeholder="Enter Here"
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "50px" }}
                        />
                    </div>

                    <select name='country' className='country' onChange={handleChange} style={{ padding: "15px", width: "250px" }}>
                        <option disabled selected hidden>Select country</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>


                    <div className="form-group" style={{ marginTop: "20px" }}>
                        <label>Gender:</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange}
                                />
                                <span style={{ marginLeft: '10px' }}>Male</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange}
                                />
                                <span style={{ marginLeft: '10px' }}>Female</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            required
                            style={{ width: "250px", height: "100px" }}
                        />
                    </div>



                    <button type="submit" style={{ width: "250px", backgroundColor: '#020249' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
