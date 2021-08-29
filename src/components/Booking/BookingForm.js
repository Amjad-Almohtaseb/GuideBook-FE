import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { searchGuide } from "../../store/actions/guideActions";
import { format } from "date-fns/fp";


const BookingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries.countries);
  const cities = useSelector((state) => state.cities.cities);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [startDate, setStartDate] = useState(new Date("2021-08-02"));
  const [endDate, setEndDate] = useState(new Date("2021-08-02"));
  const [groupSize, setGroupSize] = useState(1);

  const [countryId, setCountryId] = useState();
  const [cityId, setCityId] = useState("");

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };


  let strStartDate = format("yyyy-MM-dd", startDate);

  let strEndDate = format("yyyy-MM-dd", endDate);


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };


  const handleCountry = (event) => {
    setCountryId(event.target.value);
  };

  // generate dates between startDate and endDate as an array then convert the format for this "yyyy-mm-dd"
  const dateRange = (startDate, endDate, steps = 1) => {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate));
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray.map((e) => e.toISOString().substr(0, 10));
  };
  const handleCity = (event) => {
    setCityId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      searchGuide(
        {
          dates: dateRange(strStartDate, strEndDate),
          city: cityId,
          maxsize: groupSize,
          country: countryId,
          firstDate: selectionRange.startDate,
          lastDate: selectionRange.endDate,
        },
        history
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div
        className="book-btn pl-2 flex items-center md:border-2 rounded-full py-2 md:shadow-sm w-96 absolute top-60 cursor-pointer "
        onClick={handleShow}
      >
       
        <span className=" flex-grow pl-6 bg-transparent outline-none text-lg font-semibold  text-gray-600 ">
          Start your search
        </span>

        <SearchIcon  className="hidden md:inline-flex h-9 bg-yellow-500 text-white rounded-full p-2  md:mx-2 " />
      </div>
      {show && (
        <>
        <b className="z-50 absolute top-4 left-96  block mb-3 text-3xl  text-yellow-500  title-one">Where to go ?</b> 
         
        <div className=" z-40 absolute top-16 bg-white booking-form p-2">
          <select className=" w-56" onChange={handleCountry} required>
            <option disabled="disabled" selected="selected">
              Choose the country *
            </option>
            {countries.map((country) => (
              <option name={country.name} value={country._id}>
                {country.name}
              </option>
            ))}
          </select>

          <select className="  w-80 " onChange={handleCity} required>
            <option disabled="disabled" selected="selected">
              Choose the city *
            </option>
            {cities
              .filter((city) => city.country === countryId)
              .map((city) => (
                <option name={city.name} value={city._id}>
                  {city.name}
                </option>
              ))}
          </select>
          <hr />
          <div className="flex justify-center">
            <DateRangePicker
              ranges={[selectionRange]}
              // minDate={new Date()}
              rangeColors={["#fca311"]}
              onChange={handleSelect}
              showMonthAndYearPickers={false}
            />
          </div>
          <div className="flex items-center border-b mb-4">
            <h5 className="flex-grow ml-20 ">Group size</h5>

            <UsersIcon className="h-5" />
            <input
              type="number"
              className=" w-14 pl-2 text-lg outline-none text-yellow-500 "
              min={1}
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
            />
          </div>

          <button
            className="  bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-3 ml-28 "
            onClick={handleClose}
          >
            CANCEL{" "}
          </button>
          <button
            type="submit"
            className=" bg-yellow-500 text-white font-bold py-2 px-4 rounded-full ml-32 "
          >
            SEARCH{" "}
          </button>
        </div>
      </>)}
    </form>
  );
};

export default BookingForm;
