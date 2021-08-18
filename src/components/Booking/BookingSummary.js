import React from 'react'

const BookingSummary = () => {
  //dummy data
  const  booking = {
        tourestname:"ahmad",
        guidename:"ahmad",
        from:"2021-09-02",
        to:"2021-09-11",
        groupsize:3,
        price:45,
        status:"completed"
      }
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
      <td>{booking.tourestname}</td>
      <td>{booking.guidename}</td>
      <td>{booking.from}</td>
      <td>{booking.to}</td>
      <td>{booking.groupsize}</td>

      {/* front end */}
      <td>{booking.price}</td>
      <td>{booking.status}</td>
      
      
    </tr>

  </tbody>
</table>
        </div>
    )
}

export default BookingSummary
