import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useSelector } from "react-redux";

const BookingForm = () => {

  const countries = useSelector(state => state.countries.countries)
  const cities = useSelector(state => state.cities.cities)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [groupSize, setGroupSize] = useState(1);

  const [country, setCountry] = useState("Jordan");
  const [city, setCity] = useState("");


  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges.selection);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };


  const handleCountry = (event) => {
            setCountry(event.target.value)
  }

  const handleCity = (event) => {
    setCity(event.target.value)
}

  const handleSubmit = (event) => {
        event.preventDefault()
        console.log("tessssssssssst")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="book-btn  flex items-center md:border-2 rounded-full py-2 md:shadow-sm w-64 absolute bg-white top-60 cursor-pointer "
        onClick={handleShow}
      >
        <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
          Start your search
        </span>

        <SearchIcon className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 " />
      </div>
      {show && (
        <div className=" absolute top-16 bg-white booking-form p-2">
          <select className=" w-56"
          onChange={handleCountry}
          required
        
          >
            <option disabled="disabled" selected="selected">
              Choose the country *
            </option>
            {countries.map(country=>(<option name={country.name} value={country.name} > {country.name} </option>))}
            
          </select>

          <select 
          className="  w-80 "
            onChange={handleCity}
            required
          >
            <option disabled="disabled" selected="selected">
              Choose the city *
            </option>
            {countries.find(cnt=>cnt.name === country).cities.map(city=><option>{city.name}</option>)}
            
          </select>  
          <hr/>


          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fca311"]}
            onChange={handleSelect}
            showMonthAndYearPickers={false}
            
          />
            <div className="flex items-center border-b mb-4">
                <h5
                className="flex-grow ml-20 "
                >Group size</h5>

                <UsersIcon className="h-5"/>
                <input type="number"
                className=" w-12 pl-2 text-lg outline-none text-yellow-500 "
                min={1} 
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                />
                </div>
                   
                <button className="  bg-red-600 text-black font-bold py-2 px-4 rounded-full mb-3 ml-28 "
                onClick={handleClose}
                >Cancle </button>
                <button  type="submit" className=" bg-yellow-500 text-black font-bold py-2 px-4 rounded-full ml-40 ">Search </button>

        </div>
      )}
    </form>
  );
};

export default BookingForm;
