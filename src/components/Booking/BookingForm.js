import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useSelector } from "react-redux";
import instance from "../../store/actions/instance";
import { useHistory } from "react-router";

const BookingForm = () => {
  const history = useHistory();
  const countries = useSelector((state) => state.countries.countries);
  const cities = useSelector((state) => state.cities.cities);

  const [show, setShow] = useState(false);
  const [result, setResult] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [groupSize, setGroupSize] = useState(1);
  console.log(groupSize);

  const [countryId, setCountryId] = useState();
  const [cityId, setCityId] = useState("");

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges.selection);
  };

  let strStartDate =
    startDate.toISOString().substr(0, 8) +
    (+startDate.toISOString().substr(0, 10).slice(8) + 1).toString();

  let strEndDate =
    endDate.toISOString().substr(0, 8) +
    (+endDate.toISOString().substr(0, 10).slice(8) + 1).toString();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleCountry = (event) => {
    setCountryId(event.target.value);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    const res = await instance.post("/search", {
      dates: dateRange(strStartDate, strEndDate),
      city: cityId,
      maxsize: groupSize,
    });
    setResult(res.data);
    history.push({pathname:"/guidelist",state:{name:"hiiii"}});
  } catch(error){
    console.log(error.message)
  }
  };
  console.log(result);

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
              minDate={new Date()}
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
              className=" w-12 pl-2 text-lg outline-none text-yellow-500 "
              min={1}
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
            />
          </div>

          <button
            className="  bg-red-600 text-black font-bold py-2 px-4 rounded-full mb-3 ml-28 "
            onClick={handleClose}
          >
            Cancle{" "}
          </button>
          <button
            type="submit"
            className=" bg-yellow-500 text-black font-bold py-2 px-4 rounded-full ml-40 "
          >
            Search{" "}
          </button>
        </div>
      )}
    </form>
  );
};

export default BookingForm;