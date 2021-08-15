// still under work

import React, { useState } from "react";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import "react-day-picker/lib/style.css";
import DatePicker from "react-multi-date-picker";

const GuideEdit = () => {
  const [values, setValues] = useState();

let array;
const arrayOfDate=(values)=>{
  if (values) {
    const dates = values.map(
      (value) =>
        value.year.toString() +
        "-" +
        value.month.number.toString() +
        "-" +
        value.day.toString()
    );
     
     array = dates.map((date) => {
      if (!+date.slice(5, 7)) {
        date = date.slice(0, 5) + "0" + date.slice(5, 9);
      }

      if (date.length === 9) {
        date = date.slice(0, 8) + "0" + date[8];
      }
      return date;
    });
  } 
  return array;
}
  console.log(arrayOfDate(values))

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const guides = useSelector((state) => state.guides.guides);
  const cities = useSelector((state) => state.cities.cities);
  const guideId = guides.find((guide) => guide.user.id === user.id)._id;
 
  const [guideInfo, setGuideInfo] = useState({
    city: "",
    price: null,
    maxsize: null,
    description: "",
  });
  const handleChange = (event) => {
    setGuideInfo({ ...guideInfo, [event.target.name]: event.target.value });
    console.log(event.target.value)
  };
  console.log(values)
  const handleCalendar = (r) => {
 
    console.log(values)
    setValues(r)
    setGuideInfo({ ...guideInfo, notAvailabeDates: arrayOfDate(values)});

   
  };
  const resetForm = () => {
    setGuideInfo({
      city: "",
      price: null,
      maxsize: null,
      notAvailabeDates: [],
      description: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch(updateUser(guideInfo,guideId));
    setShow(false);
    resetForm();
  };
// console.log(guideInfo)
  return (
    <>
      <div
        className="  flex items-center md:border-2 rounded-full py-2 md:shadow-sm  w-80 absolute bg-white top-60 cursor-pointer guide-btn"
        onClick={() => setShow(true)}
      >
        <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
          Fill The Form To Start Your Job
        </span>

        <FaArrowCircleRight className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 w-10" />
      </div>
      {show && (
        <form onSubmit={handleSubmit}>
          <div className=" absolute top-16 bg-white booking-form ml-20 p-2">
            <div className=" ml-36">
              <select
                name="city"
                className=" w-44 "
                required
                onChange={handleChange}
              >
                <option disabled="disabled" selected="selected">
                  Choose the city
                </option>
                {cities.map((city) => (
                  <option name={city.name} value={city._id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className=" ml-36">
              <label className=" font-bold"> Price/person </label>
              <br />
              <input
                type="number"
                name="price"
                value={guideInfo.price}
                onChange={handleChange}
              />
            </div>
            <hr />
            <div className=" ml-36">
              <label className=" font-bold"> max size </label>
              <br />
              <input
                type="number"
                name="maxsize"
                value={guideInfo.maxsize}
                onChange={handleChange}
              />
            </div>
            <hr />
            <div className=" ml-36">
              <label className=" font-bold"> your holidays </label>
              <DatePicker
                multiple
                value={values}
                
                onChange={handleCalendar}//{setValues}
              />
            </div>
            <hr />

            <div className=" ml-36">
              <label className=" font-bold"> Description </label>
              <br />
              <textarea
                name="description"
                rows="4"
                cols="50"
                /*value={guideInfo.description}*/ onChange={handleChange}
              />
            </div>
            <hr />

            <button
              className="  bg-red-600 text-black font-bold py-2 px-4 rounded-full mb-3 ml-20 "
              onClick={() => setShow(false)}
            >
              Cancle{" "}
            </button>
            <button
              type="submit"
              className=" bg-yellow-500 text-black font-bold py-2 px-4 rounded-full ml-20 w-24 "
            >
              Edit{" "}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default GuideEdit;
