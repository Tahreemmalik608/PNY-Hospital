import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        password: ""
    });
    const [show, setShow] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [showPasswordField, setShowPasswordField] = useState(false);

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showPassword = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/forgot`, formData);
        console.log(response);
        if (response.data.success) {
            toast.success(response.data.message);
            setShowOTP(true);
        } else {
            toast.warning(response.data.message);
        }
    };

    const handleOtp = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/verifyotp`, formData);
        if (response.data.success) {
            toast.success(response.data.message);
            setShowPasswordField(true);
        } else {
            toast.warning(response.data.message);
        }
    };

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/user/updatepassword`, formData);
        if (response.data.success) {
            toast.success(response.data.message);
            navigate("/"); // Navigate to login or another page after successful password update
        } else {
            toast.warning(response.data.message);
        }
    };

    return (
        <div>
            <div>
                <div className="backgroundtwo">
                    <div className="login">
                        <p className="account">Forgot Password</p>
                        <form onSubmit={showPasswordField ? handleUpdatePassword : showOTP ? handleOtp : handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={onChange}
                                    name="email"
                                    disabled={showOTP || showPasswordField}
                                    required
                                />
                            </div>
                            {showOTP && (
                                <div className="form-group">
                                    <label htmlFor="otp">OTP:</label>
                                    <input
                                        type="text"
                                        id="otp"
                                        value={formData.otp}
                                        onChange={onChange}
                                        name="otp"
                                        disabled={showPasswordField}
                                        required
                                    />
                                </div>
                            )}
                            {showPasswordField && (
                                <div className="form-group password-group">
                                    <label htmlFor="password">New Password:</label>
                                    <div className="input-wrapper">
                                        <input
                                            type={show ? "text" : "password"}
                                            id="password"
                                            value={formData.password}
                                            name="password"
                                            onChange={onChange}
                                            required
                                        />
                                        <span className="password-icon" onClick={showPassword}>
                                            {show ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <button type="submit" style={{ marginTop: "40px" }}>
                                {showPasswordField ? "Update Password" : showOTP ? "Verify OTP" : "Generate OTP"}
                            </button>
                        </form>
                        <Link to={"/"}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
