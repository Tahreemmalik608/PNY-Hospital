import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const counterr=useSelector((state)=>state.counter.value)
  return (
    <div class="footer2">
 <div class="QUICK ">
            <ul class="information2">
        <li style={{fontWeight:"bolder", fontSize:"25px"}}>Information</li>
        <li>Board of Trustees</li>
        <li>{counterr}</li>
        <li>Partnerships</li>
        <li>Corporate Partners</li>
        <li>Privacy Policy</li>
        <li>Happenings</li>
    </ul>
    </div>
    <div class="SUPPORT">
            <ul class="information2">
        <li style={{fontWeight:"bolder" , fontSize:"25px"}}>Important Links</li>
        <li>Publications</li>
        <li>Careers</li>
        <li>Library </li>
        <li>Blogs</li>
       
    </ul>
    </div>
    <div class="POLICY">
        <ul class="information2">
            <li style={{fontWeight:"bolder" , fontSize:"25px"}}>Important Links</li>
            <li>Shalamar Institute of Health Sciences</li>
            <li>Shalamar School of Allied Health Sciences</li>
            <li>Shalamar Medical and Dental College</li>
            <li>Shalamar Nursing College</li>
        </ul>
</div>

        </div>
  )
}

export default Footer