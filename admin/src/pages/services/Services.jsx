import React, { useState, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { toast } from "react-toastify";

const Services = () => {
  const [data, setServices] = useState([]);
  const fetchServices = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/service`
      );
      if (response.data.success) {
        setServices(response.data.services);
      }
    } catch (error) {
      toast.error("Failed to fetch services");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const navigate = useNavigate();
  const goToAddServices = () => {
    navigate("/add-service");
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/service/${id}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchServices();
      }
    } catch (error) {
      toast.error("Failed to remove service");
      console.error(error);
    }
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      style: {
        padding: "5px",
        marginLeft: "10px",
      },
    },
    {
      name: "EXT",
      selector: (row) => row.ext,
      style: {
        padding: "5px",
      },
    },
    {
      name: "Description",
      selector: (row) => row.description,
      style: {
        padding: "5px",
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
        padding: "5px",
      },
    },
    {
      name: "Doctor Name",
      selector: (row) => row.doctorId.name,
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
            <Link to={`/update-service/${row._id}`}>
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
    <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
      <div className="background">
        <div className="blue-nav">
          <FaRegCircleUser className="user" />
        </div>

        <div className="box">
          <h2>Welcome To Service Page</h2>
        </div>
        <div className="serve">
          <h3 style={{ marginLeft: "10px", marginTop: "20px" }}>
            Services List
          </h3>
          <button className="btn" onClick={goToAddServices}>
            +Add Services
          </button>
        </div>

        <div style={{ width: "100%" }}>
          <DataTable
            columns={columns}
            data={data}
            pagination
            customStyles={{
              rows: {
                style: {
                  minHeight: "30px",
                },
              },
              headCells: {
                style: {
                  paddingLeft: "4px",
                  paddingRight: "4px",
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

export default Services;
