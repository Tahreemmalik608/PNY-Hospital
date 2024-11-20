import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { IoCaretDownOutline } from "react-icons/io5";

const Nav = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="index">
      <ul class="bar text-light ">
        <li class="grand8 ">
          <Link
            id="Summer Donate"
            to="/Donate"
            style={{ color: color, textDecoration: "none" }}
            onMouseOver={() => setColor("red")}
            onMouseOut={() => setColor("white")}
          >
            Donate Now
          </Link>
        </li>
        <li class="grand ">
          <Link to="" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            Patient Portal
          </Link>
        </li>
        <li class="grand2 ">
          <Link to="" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            Book Appointment
          </Link>
        </li>
        <div class="dropdown">
          <button class="dropbtn">
            Careers
            <IoCaretDownOutline />
          </button>
          <div class="dropdown-content">
            <Link to="/Vacent">Vacant Position</Link>
            <Link to="/Program">PG Programs</Link>
            <Link to="/">Apply Online</Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
