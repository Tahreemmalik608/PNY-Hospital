import React from 'react'

const Card = () => {
  const data=[
    {
      image:"https://cdn-icons-png.flaticon.com/512/12310/12310088.png",
      title:"Holistic Approach",
      description:"At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFUwfmlkvPUADbyQVYYy4B2HK2MGSQboafw&s",
      title:"24/7 Service",
      description:"No matter when you need us, our hospital is always open, so you can get the care you need, when you need it"
    },
    {
      image:"https://cdn-icons-png.flaticon.com/512/12310/12310088.png",
      title:"Holistic Approach",
      description:"At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well"
    },
    {
      image:"https://cdn-icons-png.flaticon.com/512/12310/12310088.png",
      title:"Holistic Approach",
      description:"At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well"
    },
    {
      image:"https://cdn-icons-png.flaticon.com/512/12310/12310088.png",
      title:"Holistic Approach",
      description:"At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well"
    },
    {
      image:"https://cdn-icons-png.flaticon.com/512/12310/12310088.png",
      title:"Holistic Approach",
      description:"At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well"
    },
  ]
  return (
    <div class="cards flex-wrap ">
{
  data.map((item)=>{
    return(
<div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "22rem" }}>
        <img src={item.image} class="card-img-top" height="150px" width="20px"></img>
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>
        </div>
      </div>
    )
  })
}
    </div>
  )
}

export default Card