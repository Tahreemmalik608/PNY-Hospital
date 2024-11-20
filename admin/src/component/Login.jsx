import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [show, setShow] = useState(false)

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const showPassword = () => {
        setShow(!show)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, formData)
        console.log(response);
        if (response.data.success) {
            toast.success(response.data.message)
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard");

        } else {
            toast.warning(response.data.message);
        }
    };

    return (
        <div>
            <div className="backgroundtwo">
                <div className="login">
                    <p className="account">Admin Login</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={onChange}
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group password-group">
                            <label htmlFor="password">Password:</label>
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
                        <button type="submit" style={{ marginTop: "40px" }}>Sign in</button>
                    </form>
                    <Link to={"/forgot"}>Forgot Password</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
