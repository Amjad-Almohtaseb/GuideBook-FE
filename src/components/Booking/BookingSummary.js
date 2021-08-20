import React, { useEffect } from 'react'

import {  useSelector } from 'react-redux'

//icons
import {AiFillDollarCircle} from "@react-icons/all-files/ai/AiFillDollarCircle"
import {SiGooglecalendar} from "@react-icons/all-files/si/SiGooglecalendar"
import {MdEmail} from "@react-icons/all-files/md/MdEmail"
import {MdSmartphone} from "@react-icons/all-files/md/MdSmartphone"
import { useHistory } from 'react-router'

const BookingSummary = () => {

 const history=useHistory()
  const bookings = useSelector(state => state.bookings.bookings)
  const user = useSelector(state=> state.user)
 
  const booking = bookings.filter((book)=> book.user._id === user._id)
  const summary = booking[booking.length-1]
 
    return (
      <>
      <h2 className="ml-96 -mb-8 mt-4">Booking Summary</h2>
        {/* guide info */}
         <div className="card h-64  absolute flex   w-96 p-3 guide-card-summary">
        <div className="row no-gutters">
        <div className="col-md-4">
            <h3
              className=" absolute left-36 uppercase "
              >
                 Guide
                
                </h3>
          </div>
          <div className="col-md-4">
            <img
              className=" w-20 h-20 border-1 absolute left-4 top-16 rounded-full "
              src={summary.guide.user.image}
              alt={summary.guide.user.username}
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h4 className="card-title absolute top-20 left-28 text-gray-700 ">
               
                {summary.guide.user.fullname}
                
              </h4>

              <p className=" absolute left-28 top-28 text-gray-400 ">
                <h6>@{summary.guide.user.username}</h6>
              </p>
          
             
              <h5 className="card-title left-10 absolute top-44 text-gray-700">
                <MdSmartphone className=" inline" /> {summary.guide.user.phone}
              </h5>

            
              <p className="card-text absolute left-10 top-52 text-gray-700">

                <h5><MdEmail className=" inline"/> {summary.guide.user.email}</h5>
              </p>
              <p className="card-text">
                <p style={{ color: "blueviolet" }}></p>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* tourist guide */}
      <div className="card h-64 absolute   flex   w-96 p-3 tourist-card-summary">
        <div className="row no-gutters">
        <div className="col-md-4">
            <h3
              className=" absolute left-36 uppercase "
              >
                 tourist
                
                </h3>
          </div>
          <div className="col-md-4">
            <img
              className=" w-20 h-20 border-1 absolute left-4 top-16 rounded-full "
              src={summary.user.image}
              alt={summary.user.username}
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h4 className="card-title absolute top-20 left-28 text-gray-700 ">
                
                {summary.user.fullname}
                
              </h4>

              <p className=" absolute left-28 top-28 text-gray-400 ">
                <h6>@{summary.user.username}</h6>
              </p>
          
             
              <h5 className="card-title left-10 absolute top-44 text-gray-700">
              <MdSmartphone className=" inline" /> {summary.user.phone}
              </h5>

            
              <p className="card-text absolute left-10 top-52 text-gray-700">

                <h5><MdEmail className=" inline"/> {summary.user.email}</h5>
              </p>
              <p className="card-text">
                <p style={{ color: "blueviolet" }}></p>
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* done card */}
        
        <div className="card  absolute   flex    p-3 done-card-summary">
       <div >
        <h5 className="uppercase"> booking duration</h5><br/>
         <p><SiGooglecalendar className=" inline"/> {summary.startingDate} to {summary.endDate}</p>
       </div>
       <div >
         <h5 className=" uppercase">total price</h5><br/>
         <p><AiFillDollarCircle className=" inline"/> {summary.groupSize * summary.guide.price}</p>
       </div>
       <div>
         <button className="btn btn-warning mt-8 w-40" onClick={()=>history.push("/")}>DONE</button>
       </div>
      </div>
      </>
    )
}

export default BookingSummary
