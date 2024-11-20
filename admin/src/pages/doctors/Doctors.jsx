import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { toast } from "react-toastify";

const Doctors = () => {
  const [data, setData] = useState([]);
  const fetchDoctors = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/doctor`);
    setData(response.data.doctors);
  };
  useEffect(() => {
    fetchDoctors();
  }, []);
  const navigate = useNavigate();
  const goToAdddoctors = () => {
    navigate("/add-doctor");
  };
  const handleRemove = async (id) => {
    const response = await axios.delete
      (`${process.env.REACT_APP_BASE_URL}/doctor/${id}`
    );
    if (response.data.success) {
      toast.success(response.data.message);
      fetchDoctors();
    }
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      style: {
        padding: "0 5px",
      },
    },
    {
      name: "Education",
      selector: (row) => row.education,
      style: {
        padding: "0 5px",
      },
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={`${process.env.REACT_APP_FILE_URL}uploads/${row.image}`}
          alt={row.title}
          style={{ height: "auto", width: "50px" }}
        />
      ),
      style: {
        padding: "0 5px",
      }
    },
    {
      name: "Email",
      selector: (row) => row.email,
      style: {
        padding: "0 5px",
      },
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      style: {
        padding: "0 5px",
      },
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      style: {
        padding: "0 5px",
      },
    },
    {
      name: "Actions",
      style: {
        padding: "5px",
      },
      cell: (row) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="contact-button">
            <Link to={`/update-doctor/${row._id}`}>
              <div className="tick">✔️</div>
            </Link>
            <div className="cross" onClick={() => handleRemove(row._id)}>
              ❌
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div style={{ marginLeft: "200px" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>

        <div className="box">
          <h2>Welcome To Doctor Page</h2>
        </div>
        <div className="serve">
          <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>Doctor List</h3>
          <button className="btn" onClick={goToAdddoctors}>
            +Add Doctor
          </button>
        </div>

        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
};
export default Doctors;
