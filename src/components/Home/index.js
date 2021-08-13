import React from "react";
import BookingForm from "../Booking/BookingForm";
import FavCities from "./FavCities";


const Home = () => {


  return (
       <>
      <div className="card  image-full flex items-center ">

        <figure className="bg-image"> 
        <BookingForm/>
        </figure>


      </div>
      <FavCities/>
      </>
  );
};

export default Home;
//still under work 