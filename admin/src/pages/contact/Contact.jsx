import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import DataTable from "react-data-table-component";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate } from 'react-router-dom';

const Contact = () => {
  const [data, setData] = useState([]);
  const fetchContact = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/contact`);
        setData(response.data.contacts);
    };
  useEffect(() => {
    fetchContact();
  }, []);

  const handleRemove = async (id) => {
    const response = await axios.delete
      (`${process.env.REACT_APP_BASE_URL}/contact/${id}`
    );
    if (response.data.success) {
      toast.success(response.data.message);
      fetchContact();
    }};

    const navigate = useNavigate();
  const goToAddContact = () => {
    navigate('/add-contact');
  };


  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      style: {
        padding: "5px",
        marginLeft: "8px",
      },
    },
    {
      name: "Email",
      selector: (row) => row.email,
      style: {
        padding: "5px",
      },
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      style: {
        padding: "5px",
      },
    },
    {
      name: "Country",
      selector: (row) => row.country,
      style: {
        padding: "5px",
      },
    },
    {
      name: "Message",
      selector: (row) => row.message,
      style: {
        padding: "5px",
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
            <div className="tick" onClick={goToAddContact}>
              ✔️
            </div>
            <div className="cross" onClick={() => handleRemove(row._id)}>
              ❌
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>

        <div className="box">
          <h2>Welcome To Contact Page</h2>
        </div>

        <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>Contact List</h3>

        <div style={{ width: "100%" }}>
          <DataTable
            columns={columns}
            data={data}
            customStyles={{
              rows: {
                style: {
                  minHeight: "30px",
                },
              },
              headCells: {
                style: {
                  paddingLeft: "10px",
                  paddingRight: "0px",
                },
              },
              cells: {
                style: {
                  paddingLeft: "4px",
                  paddingRight: "4px",
                },
              },
            }}
            responsive
            dense
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
