import React,{useState} from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import "./contact.css"
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const ContactUs = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:"",
    country:"",
    gender:""
  })
  const {name,email,message,country,gender}=formData;
  const navigate=useNavigate()
const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const onSubmit=async(e)=>{
e.preventDefault();
const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/contact`,formData)
if(response.data.success){
  setFormData({
    name:"",
    email:"",
    message:"",
    gender:"",
    country:""
  })
  toast.success("Contact Created Successfully!")
navigate("/")
}
}
  return (
    <>
    
    <img src="https://shalamarhospital.org.pk/wp-content/uploads/2022/05/icu-2-1024x683.jpg" alt="" style={{width:"100%",height:"550px", marginTop:"-20px"}} />
    <h1>Contact Us</h1>
    <div className="cardz">
      <div className="cadz">
      <div className="icn"><FaLocationArrow /></div>
      <h2>Address</h2>
      <p>Shalamar Link Road,Lahore, Pakistan</p>
      </div>
      <div className="cadz">
      <div className="icn"><FaPhoneSquare /></div>
      <h2>Phone</h2>
      <p>General Inquiries: 042-111 205 205</p>
      <p>+92 42 3681 7857 <br />+92 42 3682 3712 <br /><br />Complaint Cell: 03354617958</p>
      </div>
      <div className="cadz">
      <div className="icn"><FaMailBulk /></div>
      <h2>Address</h2>
      <p>General Inquiries: info@sihs.org.pk <br /><br /> Complaint Cell: complaintcell@sihs.org.pk</p>
      </div>
    </div>
    <h2 style={{textAlign:"center"}}>Drop your Feedback/Suggestions</h2>
    <div className='d-flex justify-content-evenly'>
    <form class="d-flex flex-column" onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name='name' className='input' onChange={onChange} value={name} placeholder='Enter Name' />
      <label class="space">Email</label>
      <input type="email" name='email' className='input' onChange={onChange} value={email} placeholder='Enter Email' />
      <label>Country</label>
      <select name='country' className='country' onChange={onChange}>
        <option disabled selected hidden>Select country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
      <label>Gender:</label>
      <div className="d-flex w-50 gap-4">
      <input type="radio" name='gender' onChange={onChange} value="male"/>
      <label>Male</label>
      <input type="radio" name='gender' onChange={onChange} value="female"/>
      <label>Female</label>
      </div>

      <label class="space">Message</label>
      <textarea class="mess" type="text" name='message' value={message} onChange={onChange} />
      <button type='submit'>Submit</button>
    </form>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.1383272725634!2d74.37725707545337!3d31.575254374188845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ac9af9d7edf%3A0xa625f11332d699cb!2sShalamar%20Hospital!5e0!3m2!1sen!2s!4v1725780260134!5m2!1sen!2s" width="600" height="420" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default ContactUs
