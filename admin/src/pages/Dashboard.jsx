import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import axios from "axios";

const Dashboard = () => {
  const [dashboardCount, setDashboardCount] = useState({});
  const fetchCount = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard`);
    setDashboardCount(response.data.count);
  };
  useEffect(() => {
    fetchCount();
  }, []);
  return (
    <>
      <h1 style={{ marginLeft: "230px", marginTop: "40px" }}>Dashboard</h1>
      <div className="flex">
        <Link to="/doctors">
          <div class="card1">
            {" "}
            <div class="icon">
              <FaUserDoctor />
            </div>
            <hr />
            <h2>{dashboardCount.doctors}</h2>
            <p>Total Doctors</p>
          </div>
        </Link>
        <div class="card2">
          {" "}
          <div class="icon">
            <FaRegUser />
          </div>
          <hr />
          <h2>{dashboardCount.patients}</h2>
          <p>Total Patients</p>
        </div>
        <div class="card3">
          {" "}
          <div class="icon">
            <CiViewTimeline />
          </div>
          <hr />
          <h2>{dashboardCount.services}</h2>
          <p>Total Services</p>
        </div>
        <Link to={"/contact"}>
          <div class="card4">
            {" "}
            <div class="icon">
              <IoMdContact />
            </div>
            <hr />
            <h2>{dashboardCount.contacts}</h2>
            <p>Total Contact</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
