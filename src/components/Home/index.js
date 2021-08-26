import React from "react";
import BookingForm from "../Booking/BookingForm";
import FavCities from "./FavCities";

import scrollTo from "gatsby-plugin-smoothscroll";

//icons
import {FaChevronCircleUp} from "@react-icons/all-files/fa/FaChevronCircleUp"

const Home = () => {
  return (
    <>
      <div className="card  image-full flex items-center ">
        <figure className="bg-image">
          <BookingForm />
        </figure>
      </div>

      <FavCities />
      <button
          type="button"
          className="absolute"
          onClick={() => scrollTo("#nav")}
          style={{marginLeft:"1450px"}}
        >
          <FaChevronCircleUp size={35} color={"#14213d"}/>
        </button>
    </>
  );
};

export default Home;
