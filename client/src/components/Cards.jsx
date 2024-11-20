import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from "axios"

export default function Cards() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [doctors, setDoctors] = useState([]);
  const fetchDoctors = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctor`)
    setDoctors(response.data.doctors)
  }
  useEffect(() => {
    fetchDoctors();
  }, [])
  return (
    <div className="boxes">
      <Carousel responsive={responsive}>
        {
          doctors.map((doctor) => {
            return (
              <>
              <div className="box1">
              <img className="picc1" src="pic1.jpg" alt="hello" />
              <h2 className="info1">{doctor?.name}</h2>
              <p className="content1">{doctor?.education}</p>
              <button className="tap">{doctor?.email}</button>
            </div>
            </>
        )
          })
        }

      </Carousel>
    </div>
  )
}
