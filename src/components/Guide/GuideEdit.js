// still under work

import React, { useState } from "react";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import 'react-day-picker/lib/style.css';
import DatePicker from "react-multi-date-picker"



const GuideEdit = () => {
    
    const today = new Date()
    const tomorrow = new Date()
  
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [values, setValues] = useState([today, tomorrow])
   
    // const date = values.map(value=> (value.year.toString()+"-"+(value.month.number.toString()))+"-"+(value.day.toString()) )
//     const date = values.map(value=>  {
//         if(value.month.number.toString().length==1) return value.year.toString()+"0"+value.month.number.toString()+"-"+(value.day.toString())
//         if(value.day.toString().length==1)
//         return value.year.toString()+"-"+(value.month.number.toString())+"-"+"0"+value.day.toString()
//         //  (value.year.toString()+"-"+(value.month.number.toString()))+"-"+(value.day.toString())
        
//     })
// const array=a.map(_a=>{
//     if (!+_a.slice(5,7)){
//         _a=_a.slice(0,5)+"0"+_a.slice(5,9)
//     }
     
//     if (_a.length===9){
//      _a=_a.slice(0,8)+"0"+_a[8]
//      }
//     return _a
//     })
    // console.log(array)
// console.log(date)
  const [show, setShow] = useState(false);
 const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const guides = useSelector(state => state.guides.guides)
    const cities = useSelector(state => state.cities.cities)
    const guideId = guides.find(guide=> guide.user.id=== user.id)._id
    console.log(values)
    const [guideInfo, setGuideInfo] = useState(
        {
              city:"",
              price:null,
              maxsize:null,
              notAvailabeDates:[],
              description:"",
        }   
      );
      console.log(guideInfo)
  const handleChange=(event)=>{
    setGuideInfo({ ...guideInfo, [event.target.name]: event.target.value });

}
const resetForm = () => {
    setGuideInfo({
        city:"",
        price:null,
        maxsize:null,
        notAvailabeDates:[],
        description:"",
    });
  };
const handleSubmit = (event) => {
    event.preventDefault();
    
    // dispatch(updateUser(profile,guideId));
    setShow(false)
    resetForm();
  };

  
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
                {cities.map(city=>
                <option name={city.name} value={city._id}>{city.name}</option>
                )}
              </select>
            </div>
            <hr />
            <div className=" ml-36">
              <label className=" font-bold"> Price/person </label>
              <br />
              <input type="number" name="price" value={guideInfo.price} onChange={handleChange} />
            </div>
            <hr />
            <div className=" ml-36">
              <label className=" font-bold"> max size </label>
              <br />
              <input type="number" name="maxsize" value={guideInfo.maxsize} onChange={handleChange} />
            </div>
            <hr />
            <DatePicker 
      multiple
      value={values} 
      onChange={setValues}
    />
          
 
            <div className=" ml-36">
              <label className=" font-bold"> max size </label>
              <br />
              <textarea name="description" rows="4" cols="50" /*value={guideInfo.description}*/ onChange={handleChange} />
            </div>
            <hr />
            <div className=" ml-36">
              <label className=" font-bold"> Add your phone number </label>
              <br />
              <input
                placeholder="+962-000000000"
                type="tel"
                name="phone"
                className=" border-1"
                onChange={handleChange}
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
