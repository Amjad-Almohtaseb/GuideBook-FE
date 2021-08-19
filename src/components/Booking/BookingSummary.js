import React, { useEffect } from 'react'

import {  useSelector } from 'react-redux'


const BookingSummary = () => {

 
  const bookings = useSelector(state => state.bookings.bookings)
  const user = useSelector(state=> state.user)
  const guides = useSelector(state => state.guides.guides)
  const booking = bookings.filter((book)=> book.user._id === user._id)
  const summary = booking[booking.length-1]
  const guideName = guides.find(guide=> guide._id=== summary.guide._id).user.fullname
  let today = new Date().toISOString().substr(0, 10);
  console.log(summary)
  console.log(guides)
  //dummy data
  // const  booking = {
  //       tourestname:"ahmad",
  //       guidename:"ahmad",
  //       from:"2021-09-02",
  //       to:"2021-09-11",
  //       groupsize:3,
  //       price:45,
  //       status:"completed"
  //     }
    return (
        <div className=" mt-16 mx-20  ">
            <table className="table ">
  <thead className=" bg-black text-white ">
    <tr>
      <th scope="col">#</th>
      <th scope="col">tourestname</th>
      <th scope="col">guidename</th>
      <th scope="col">from</th>
      <th scope="col">to</th>
      <th scope="col">groupsize</th>
      <th scope="col">price</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{summary.user.fullname}</td>
      <td>{guideName}</td>
      <td>{summary.startingDate}</td>
      <td>{summary.endDate}</td>
      <td>{summary.groupSize}</td>

      {/* front end */}
      <td>{summary.guide.price * summary.groupSize}</td>
      {today>summary.endDate?
      <td>completed</td>
     :today<summary.startingDate?
     <td>upcoming</td>
    :<td>in progress</td> }
      
    </tr>

  </tbody>
</table>
        </div>
    )
}

export default BookingSummary
