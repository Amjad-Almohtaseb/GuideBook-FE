import React, { useState } from "react";
import BookingForm from "../Booking/BookingForm";
import Map from "../Map";
import GuideItem from "./GuideItem";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { searchGuide } from "../../store/actions/guideActions";

const GuideList = () => {
  const foundGuides = useSelector((state) => state.guides.foundguides);
  const guideList = foundGuides.map((guide) => (
    // <GuideItem guide={guide} key={guide._id} />
    <>
      {" "}
      <GuideItem guide={guide} key={guide._id} />{" "}
      <hr className=" w-3/4 mx-auto" />
    </>
  ));

  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries.countries);
  const cities = useSelector((state) => state.cities.cities);
  const searchInfo = useSelector((state) => state.guides.searchInfo);

  const cityName = cities.find((city) => city._id === searchInfo.city);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [startDate, setStartDate] = useState(searchInfo.firstDate);
  const [endDate, setEndDate] = useState(searchInfo.lastDate);
  const [groupSize, setGroupSize] = useState(searchInfo.maxsize);
  // console.log(typeof(new Date()))
  console.log(searchInfo);
  const [countryId, setCountryId] = useState(searchInfo.country);
  const [cityId, setCityId] = useState(searchInfo.city);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
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
        },
        history
      )
    );
    setShow(false);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div
          className="book-btn  flex items-center md:border-2 rounded-full py-2 md:shadow-sm w-64 absolute bg-white cursor-pointer search-in-list "
          onClick={handleShow}
        >
          <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
            Start your search
          </span>

          <SearchIcon className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 " />
        </div>
        {show && (
          <div className=" z-30 absolute top-16 bg-white booking-form p-2">
            <select
              className=" w-56"
              onChange={handleCountry}
              required
              defaultValue={countryId}
            >
              <option disabled="disabled">Choose the country *</option>
              {countries.map((country) => (
                <option name={country.name} value={country._id}>
                  {country.name}
                </option>
              ))}
            </select>

            <select
              className="  w-80 "
              onChange={handleCity}
              required
              defaultValue={cityId}
            >
              <option disabled="disabled">Choose the city *</option>
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
                //startDate={new Date()}
                //endDate={new Date("October 13, 2021 11:13:00")}
                //  value="Mon Aug 23 2021 00:00:00 GMT+0300 (Eastern European Summer Time)"
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
              CANCEL{" "}
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
      <div className=" guides">{guideList}</div>

      <div className="absolute mapbox">
        <Map foundGuides={foundGuides} />
      </div>
    </div>
  );
};

export default GuideList;
