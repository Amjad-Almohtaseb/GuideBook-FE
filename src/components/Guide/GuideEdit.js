import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGuide } from "../../store/actions/guideActions";
import "react-day-picker/lib/style.css";
import DatePicker from "react-multi-date-picker";

//icons
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";
import { ImLocation2 } from "@react-icons/all-files/im/ImLocation2";
//Mapbox
import ReactMapGL, { Marker } from "react-map-gl";
import { MapKey } from "../Map/MapKey";

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
    city: guide.city ? guide.city._id : "61227fa85e50f60c58b5d913",
    price: guide.price,
    maxsize: guide.maxsize,
    description: guide.description,
    notAvailabeDates: guide.notAvailabeDates,
    location: guide.location,
  });

  //  console.log(cities)
  //  console.log(guideInfo)

  const cityLngLat = cities.find(
    (city) => city._id === guideInfo.city
  ).location;
  // console.log(cityLngLat)

  useEffect(() => {
    setViewport({
      ...viewport,
      longitude: cityLngLat[0],
      latitude: cityLngLat[1],
    });
  }, [cityLngLat]);

  const [viewport, setViewport] = useState({
    width: "500px",
    height: "450px",
    zoom: 11,
    longitude: 28.97953,
    latitude: 41.015137,
  });

  console.log(viewport.longitude);
  console.log(viewport.latitude);

  const handleChange = (event) => {
    setGuideInfo({ ...guideInfo, [event.target.name]: event.target.value });
  };

  const handleCalendar = (r) => {
    setGuideInfo({ ...guideInfo, notAvailabeDates: arrayOfDate(r) });
  };

  const handleMap = (event) => {
    setGuideInfo({ ...guideInfo, location: event.lngLat });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateGuide(guideInfo, guideId));
    setShow(false);
  };

  return (
    <>
      {guide.city && guide.price ? (
        <div
          className="  flex items-center md:border-2 rounded-full py-2 w-80 absolute bg-white cursor-pointer guide-btn "
          onClick={() => setShow(true)}
        >
          <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600  ">
            Edit Your Work Information
          </span>

          <FaArrowCircleRight className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 w-10" />
        </div>
      ) : (
        <div
          className="  flex items-center md:border-2 rounded-full py-2 w-80 absolute bg-white cursor-pointer guide-btn  animate-bounce"
          onClick={() => setShow(true)}
        >
          <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
            Fill The Form To Start Your Job
          </span>

          <FaArrowCircleRight className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 w-10" />
        </div>
      )}

      {show && (
        <form onSubmit={handleSubmit}>
          <div className=" absolute -top-4 bg-gray-800 guide-form  p-2 z-10  border-yellow-400 border-2 border-double ">
            <div className=" flex flex-row justify-evenly flex-wrap ">
              <span>
                <label className=" font-bold text-white "> Your City </label>{" "}
                <br />
                <select
                  name="city"
                  className=" w-44 "
                  onChange={handleChange}
                  value={guideInfo.city}
                  // required
                >
                  <option disabled="disabled" selected="selected">
                    Choose The City
                  </option>
                  {cities.map((city) => (
                    <option name={city.name} value={city._id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </span>
              <span>
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
              </span>
              <span>
                <label className=" font-bold text-white ">
                  {" "}
                  Max Group Size{" "}
                </label>
                <br />
                <input
                  type="number"
                  name="maxsize"
                  value={guideInfo.maxsize}
                  onChange={handleChange}
                  min={1}
                  required
                />
              </span>
              <span>
                <label className=" font-bold text-white ">
                  {" "}
                  Your Holidays{" "}
                </label>
                <br />
                <DatePicker
                  multiple
                  onChange={handleCalendar} //{setValues}
                  minDate={new Date()}
                  value={guideInfo.notAvailabeDates}
                />
              </span>
            </div>
            <hr className=" bg-yellow-400" />

            <div className=" flex flex-row justify-evenly">
              {guideInfo.city && (
                <span>
                  <ReactMapGL
                    mapStyle="mapbox://styles/ibrashaheen/cksgk86h25bxw17uqom0h83s3"
                    mapboxApiAccessToken={MapKey}
                    onClick={handleMap} //very important (solution key)
                    {...viewport}
                    onViewportChange={(nextViewport) =>
                      setViewport(nextViewport)
                    }
                  >
                    <Marker //TO DOOOOOOOOOOOOOOOOOOOOOO
                      longitude={guideInfo.location[0] || 0}
                      latitude={guideInfo.location[1] || 0}
                      // longitude={0}
                      // latitude={0}
                      offsetLeft={-20}
                      offsetTop={-10}
                    >
                      <p className=" cursor-pointer text-2xl animate-pulse  ">
                        <ImLocation2 color="red" size={35} />‏
                      </p>
                    </Marker>
                  </ReactMapGL>
                </span>
              )}

              <span className=" my-auto">
                <label className=" font-bold text-white "> Description </label>
                <br />
                <textarea
                  name="description"
                  rows="6"
                  cols="35"
                  onChange={handleChange}
                  value={guideInfo.description}
                />
              </span>
            </div>
            <hr className=" bg-yellow-400" />
            <span className=" flex flex-row justify-evenly items-center">
              <button
                className="  bg-red-600 font-bold py-2 px-4 rounded-full mb-3 w-36  text-white "
                onClick={() => setShow(false)}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className=" bg-yellow-500 text-white mb-3  font-bold py-2 px-4 rounded-full  w-36 "
              >
                SAVE
              </button>
            </span>
          </div>
        </form>
      )}
    </>
  );
};

export default GuideEdit;
