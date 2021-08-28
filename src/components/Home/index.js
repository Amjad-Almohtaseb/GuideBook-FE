import React from "react";
import BookingForm from "../Booking/BookingForm";
import TopGuides from "./TopGuides";

import scrollTo from "gatsby-plugin-smoothscroll";

//icons
import {FaChevronCircleUp} from "@react-icons/all-files/fa/FaChevronCircleUp"
import home from "./home-video.mp4"
import HomeNav from "./HomeNav";
import {FaMapMarked} from "@react-icons/all-files/fa/FaMapMarked"
import {MdPersonPin} from "@react-icons/all-files/md/MdPersonPin"
import {GiNewspaper} from "@react-icons/all-files/gi/GiNewspaper"
import { useSelector } from "react-redux";


const Home = () => {

  const guides = useSelector(state => state.guides.guides)
 
const topGuide = guides.sort((a, b) => (a.avgOfRating < b.avgOfRating ? 1 : -1)).slice(0,3).map(guide=>(




<TopGuides guide={guide} key={guide} /> 



))




  return (
    
    <>
        <video src={home} className="video-home" muted loop autoPlay></video>
        <div className="overlay"></div>
        <span className="absolute top-1 w-full">
        <span id="nav">

        <HomeNav />
        </span>
        </span>
        
          <BookingForm />
          <div className=" absolute top-96 mt-40  flex flex-row flex-wrap justify-evenly items-center  info-box">
          <div className="flex flex-col flex-wrap items-center text-white w-80 text-center ">
            <FaMapMarked size={60} color="orange"/>
          <p className="capitalize box-title">select destination</p>
          <h5> Discover experiences in the places you visit</h5>
          </div>
          <div className="flex flex-col flex-wrap items-center text-white w-80 text-center ml-16 ">
            <MdPersonPin size={60} color="orange" />
          <p className="capitalize box-title">pick a guide</p>
          <h5> Book a local guide and make the most of your trip </h5>
          </div>
          <div className="flex flex-col flex-wrap items-center text-white w-96 text-center">
            <GiNewspaper size={60} color="orange" />
          <p className="capitalize box-title">book your experience</p>
          <h5> Transform ordinary trips into extraordinary ones </h5>
          </div>
          </div> 

          {/* top guides */}
          {/* <div className="card flex bg-card  ">
          <h3 className=" ml-16  my-8 ">Top Guides</h3>
          <div className="flex flex-row  justify-evenly">
          {topGuide}
          </div>
          </div> */}

          {/* go top btn */}
      {/* <button
          type="button"
          className="absolute"
          onClick={() => scrollTo("#nav")}
          style={{marginLeft:"1450px"}}
        >
          <FaChevronCircleUp size={35} color={"orange"}/>
        </button> */}
    </>
  );
};

export default Home;
