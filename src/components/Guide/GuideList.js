import React, { useEffect, useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Spinner } from "react-bootstrap";
import { format } from "date-fns/fp";

import Map from "../Map";
import GuideItem from "./GuideItem";
import { searchGuide } from "../../store/actions/guideActions";

const GuideList = () => {
  const user = useSelector(state => state.user)
  const foundGuides = useSelector((state) => state.guides.foundguides);

  let allGuides;
  if(user)
  allGuides =  foundGuides.filter(guide=>guide.user._id !== user._id)
 else
 allGuides =  foundGuides

  const guideList =  allGuides.map((guide) => (
    
    <>
     
      <GuideItem guide={guide} key={guide._id} />{" "}
      <hr className=" w-3/4 mx-auto" />
      </>
    
  ));
    const cityLoading = useSelector(state => state.cities.loading)
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries.countries);
  const cities = useSelector((state) => state.cities.cities);
  const searchInfo = useSelector((state) => state.guides.searchInfo);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [price,setPrice]=useState(false);
  const [rating,setRating]=useState(false);


  useEffect(() => {
    foundGuides.sort((a, b) => (a.price > b.price ? 1 : -1))
    setPrice(false)
  }, [price])

  

  useEffect(() => {
    foundGuides.sort((a, b) => (a.avgOfRating < b.avgOfRating ? 1 : -1))
    setRating(false)
  }, [rating])
  const [startDate, setStartDate] = useState(new Date(searchInfo.firstDate));
  const [endDate, setEndDate] = useState(new Date(searchInfo.lastDate));
  const [groupSize, setGroupSize] = useState(searchInfo.maxsize);


  
  const [countryId, setCountryId] = useState(searchInfo.country);
  const [cityId, setCityId] = useState(searchInfo.city);
  if(cityLoading) return <Spinner/>
  const cityName = cities.find((city) => city._id === searchInfo.city).name;
  
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
          className="book-btn  flex items-center md:border-2 rounded-full py-2 md:shadow-sm absolute bg-white cursor-pointer search-in-list -ml-20 "
          onClick={handleShow}
        >
          <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
            {/* here */}
            {`${cityName} | ${searchInfo.dates[0]} to ${searchInfo.dates[searchInfo.dates.length-1]} | ${searchInfo.maxsize}`} {searchInfo.maxsize===1?"tourist":"tourists"}
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
              className="  bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-3 ml-28 "
              onClick={handleClose}
            >
              CANCEL
            </button>
            <button
              type="submit"
              className=" bg-yellow-500 text-white font-bold py-2 px-4 rounded-full ml-40 "
            >
              SEARCH
            </button>
          </div>
        )}
      </form>
      <div className="ml-20 pt-3 pb-1  ">
      <b className=" mr-3"> Sort by</b>
      <button onClick={()=>setPrice(true)} className="btn btn-outline-dark"> Price </button>
      <button className="btn btn-outline-dark ml-3" onClick={()=> setRating(true)}> Rating </button>
      </div>
      <div className=" guides">{guideList}
        {foundGuides.length===0 && <div className="capitalize text-center text-2xl mt-40 font-bold">unfortunately no available guides in this duration !</div>}</div>
      <div className=" bg-blue-300  absolute mapbox">
        <Map foundGuides={foundGuides} />
      </div>
    </div>
  );
};

export default GuideList;
