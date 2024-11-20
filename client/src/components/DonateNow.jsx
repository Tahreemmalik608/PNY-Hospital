import React,{useState} from 'react'
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
const DonateNow = () => {
  return (
    <>
    <div class="don">Donations
    <div class="texture">
    <h2 class="who">Who We Are?</h2>
    <p>Shalamar Hospital, formerly known as Businessmen Hospital Trust, was founded in 1982 as a non-profit institution with the aim<br/> of providing world-class medical facilities to the underprivileged communities of Lahore. Spread across 18 acres, this massive 500<br/>-bed hospital boasts of top-notch clinical faculty, state-of-the-art equipment, and specialized infrastructure that caters to the diverse<br/> medical needs of its patients.</p>
    <h2 class="who">Why We Need Donations?</h2>
    <p>Over the past few years, hospital continued to expand programs and services to meet the growing demands of our patients. In last 5<br/> years hospital has treated 2,700,000 patients of which 86% in OPD & Emergency and 58% in IPD received Free/Subsidised treatment.<br/>

The reality of healthcare delivery is that it is expensive, and our resources are finite. To sustain the volume of patient welfare & expand<br/> helath care facilities and services, we continuously require support from donors. Your donations will help us continue to provide the best<br/> possible care to our patients and support our ongoing efforts to improve health outcomes in our community.</p>
    </div>
    Patient Testimonial 
    <div>
    <a href="https://youtu.be/wKGxTd9xCG8" target='_main'>
   <img src="vd.PNG" alt="" />
   </a></div>
   <div class="texture" style={{marginTop:"20px"}}>
   <p >In order to fulfill the vision of pioneer trustees and to achieve the objectives of the Businessmen Trust, Shalamar Hospital has been providing <br/>free/subsidized care to hundreds of thousands of needy and indigent patients over the past 38 years. The decision of the Trustees to serve<br/> the needy patients of Lahore was met by providing direct cost subsidy on patients’ billing as well as through indirect subsidy incurred by<br/> charging the medical services provided to deserving patients below the actual cost. In 2019-20 alone over 467518 patients were provided<br/> subsidized treatment worth Rs. 234 million through Patient Welfare Services (PWS). PWS facilitates for non-affording and needy patients<br/> with free/subsidized comprises diagnostics, treatment, surgeries, medicine, diet and lodging.</p>
   <h3 class="who" style={{fontWeight:"bold"}}>The vision behind the establishment of Patient Welfare Services (PWS) is to ensure:</h3>
<ul  class="who1"  style={{fontSize:"15px"}} >
<li>A Uniform Criteria for Error Free Patient Assessment</li>
<li> No External or Internal Influences</li>
<li>  One Window Operation</li>
<li> Hassle Free Single Visit Assessment for Patients</li>
<li> Easy Access to Medical Treatment Via Health Cards</li>
<li>Verification of Patient’s Eligibility for Subsidy</li>
</ul>
   </div>
   Bank Account Details
   <div class="imges">
        <img src="https://shalamarhospital.org.pk/wp-content/uploads/2024/06/aSKARI-BANK-1.png" style={{height:"100px"}}/>
        <img src="https://shalamarhospital.org.pk/wp-content/uploads/2024/06/Untitled-design.png" style={{height:"120px"}}/>
        <img src="https://shalamarhospital.org.pk/wp-content/uploads/2024/06/images-1.png" style={{height:"100px"}}/>
    </div>
    Contact Us
    <div>
    <ul className='con'>
<li><IoLocationSharp />Shalimar Link Road, Lahore</li>
<li><IoMdPhonePortrait />04236870771</li>
<li><MdLocalPhone />0333-1184944</li>
    </ul>
    </div>
    </div>
    </>
  )
}

export default DonateNow