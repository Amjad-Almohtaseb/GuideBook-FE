
import React, { useState } from "react";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import "react-day-picker/lib/style.css";
import DatePicker from "react-multi-date-picker";
import { updateGuide } from "../../store/actions/guideActions";



const GuideEdit = ({ guide }) => {
  //to get this format "yyyy-mm-dd" from calendar
  let array;
  const arrayOfDate = (values) => {
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
  };

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const guides = useSelector((state) => state.guides.guides);
  const cities = useSelector((state) => state.cities.cities);
  const guideId = guides.find((guide) => guide.user._id === user.id)._id;

  const [guideInfo, setGuideInfo] = useState({
    // city: guide.city._id,
    price: guide.price,
    maxsize: guide.maxsize,
    description: guide.description,
    notAvailabeDates: guide.notAvailabeDates,
  });

  const handleChange = (event) => {
    setGuideInfo({ ...guideInfo, [event.target.name]: event.target.value });
  };

  const handleCalendar = (r) => {
    setGuideInfo({ ...guideInfo, notAvailabeDates: arrayOfDate(r) });
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
    dispatch(updateGuide(guideInfo, guideId));
    setShow(false);
  };

  return (
    <>
      <div
        className="  flex items-center md:border-2 rounded-full py-2 md:shadow-sm  w-80 absolute bg-white cursor-pointer guide-btn "
        onClick={() => setShow(true)}
      >
        <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
          {guide.city && guide.price
            ? "Edit Your Work Information"
            : "Fill The Form To Start Your Job"}
        </span>

        <FaArrowCircleRight className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 w-10" />
      </div>
      {show && (
        <form onSubmit={handleSubmit}>
          <div className=" absolute top-8 bg-gray-800 guide-form ml-20 p-2 z-10  border-yellow-400 border-2 border-double ">
            <div className=" ml-36">
              <label className=" font-bold text-white "> Your City </label> <br/>
              <select
                name="city"
                className=" w-44 "
                onChange={handleChange}
                value={guideInfo.city}
                // required
              >
                <option disabled="disabled" selected="selected" >
                  Choose The City
                </option>
                {cities.map((city) => (
                  <option name={city.name} value={city._id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <hr className=" bg-yellow-400" />
            <div className=" ml-36">
              <label className=" font-bold text-white "> Price/Person </label>
              <br />
              <input
                type="number"
                name="price"
                value={guideInfo.price}
                onChange={handleChange}
                min={1}
                required
              />
            </div>
            <hr className=" bg-yellow-400" />
            <div className=" ml-36">
              <label className=" font-bold text-white "> Max Group Size </label>
              <br />
              <input
                type="number"
                name="maxsize"
                value={guideInfo.maxsize}
                onChange={handleChange}
                min={1}
                required
              />
            </div>
            <hr className=" bg-yellow-400" />
            <div className=" ml-36">
              <label className=" font-bold text-white "> Your Holidays </label><br/>
              <DatePicker
                multiple
                onChange={handleCalendar} //{setValues}
                minDate={new Date()}
                value={guideInfo.notAvailabeDates}
                
              />
            </div>
            <hr className=" bg-yellow-400" />

            <div className=" ml-36">
              <label className=" font-bold text-white " > Description </label>
              <br />
              <textarea
                name="description"
                rows="4"
                cols="30"
                onChange={handleChange}
                value={guideInfo.description}
              />
            </div>
            <hr className=" bg-yellow-400" />

            <button
              className="  bg-red-600 font-bold py-2 px-4 rounded-full mb-3 ml-20 text-white "
              onClick={() => setShow(false)}
            >
              CANCLE
            </button>
            <button
              type="submit"
              className=" bg-yellow-500 text-white  font-bold py-2 px-4 rounded-full ml-32 w-24 "
            >
              SAVE
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default GuideEdit;