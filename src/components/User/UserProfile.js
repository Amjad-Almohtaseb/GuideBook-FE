import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserEdit from "../User/UserEdit";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdSmartphone } from "@react-icons/all-files/md/MdSmartphone";
import Rating from "../Rating";
import { deleteBooking } from "../../store/actions/bookingActions";

//memberships
import bronze from "../../pics/bronze1.jpg"
import silver from "../../pics/silver2.jpg"
import golden from "../../pics/golden3.jpg"
import platinum from "../../pics/platinum4.jpg"



const UserProfile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  console.log(user);
  const guides = useSelector((state) => state.guides.guides);
  const bookings = useSelector((state) => state.bookings.bookings);
  const booking = bookings.filter((book) => book.user._id === user._id);
  console.log(guides)
const [show,setShow]=useState(false);
const[id,setId]=useState()

const cancelBooking=(bookId)=>{
  setShow(true);
  setId(bookId);
}
  let today = new Date().toISOString().substr(0, 10);
  const bookingtable = booking.map((book) => (
    <>
      <tr className="font-semibold capitalize  ">
        <td>{book.user.fullname}</td>
        <td>{book.guide.user.fullname}</td>
        <td>{book.startingDate}</td>
        <td>{book.endDate}</td>
        <td>{book.groupSize}</td>
        <td>${book.guide.price * book.groupSize * book.choosenDates.length}</td>
        
        {today > book.endDate ? (
          <>
            <td className=" text-green-500 uppercase">completed</td>
            <td> <button className=" uppercase  btn btn-danger  " disabled>CANCEL</button></td>

          </>
        ) : today < book.startingDate ? (
          <>
            <td className="text-yellow-400 uppercase">scheduled</td>

            <td><span className="text-red-600 uppercase cursor-pointer btn btn-danger" onClick={()=>cancelBooking(book._id)}>CANCEL</span></td>
            
          </>
        ) : (
          <>
            <td className=" text-purple-500 uppercase">in progress</td>
            <td><button className=" uppercase  btn btn-danger " disabled>CANCEL</button></td>
          </>
        )}

        <hr />
      </tr>
    </>
  ));

  //memberships
console.log(bookings);
  const membership = () => {
    let src;
   if(booking.length>=2&&booking.length<4){
       src = silver
   } else if(booking.length>=4&&booking.length<6){
      src = golden
   }
   else if(booking.length>=6){
    src = platinum
 }
   else{
      src = bronze
   }
   return src;
  };



  return (
    <div className="card  flex flex-row profile-card ">
      <div className="rounded overflow-hidden shadow-md  mx-auto border-1 ml-6 mt-3 card1-p user-card-p ">
        {/* membership */}
      <img src={membership()} alt="membership" className="membership" />

        <UserEdit />
        <img
          className="  w-60 h-60 mx-auto mt-4 rounded-full absolute left-40  border-1 border-black"
          src={user.image}
          alt="Mountain"
        />
        <div className=" pt-2 pl-96 ml-28  text-left">
          <div >
          <span className=" text-sm"> Fullname</span>
            
            <p className=" font-semibold text-xl mb-3">{user.fullname}</p>
          </div>

          <div >
          <span className=" text-sm"> Username</span>
            <p className=" font-semibold text-xl mb-3">@{user.username}</p>
          </div>
          <div className="">
            <p className=" font-semibold text-xl">
              <MdEmail size={25} className=" inline" /> {user.email}
            </p>
          </div>
          {user.phone && (
            <div className="">
              <p className=" font-semibold text-xl ">
                <MdSmartphone size={25} className=" inline" /> {user.phone}
              </p>
            </div>
          )}
          {user.gender && (
              <div className="">
                Gender
                <p className=" font-semibold text-xl mb-3">
                  {user.gender}
                </p>
              </div>
            )}
        </div>
      </div>
      {booking.length=== 0 ? <div className=" font-bold text-gray-300 text-4xl absolute left-96 ml-32 top-96 "> You Don't Have Bookings Yet </div> 

      : (
        <div className=" user-table absolute text-center mx-12  ">
          <table className="table mx-2.5 ">
            <thead className="  text-white bg-gray-700 capitalize">
              <tr>
                <th scope="col">tourest name</th>
                <th scope="col">guide name</th>
                <th scope="col">from</th>
                <th scope="col">to</th>
                <th scope="col">group size</th>
                <th scope="col">total price</th>
                <th scope="col">status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{bookingtable}</tbody>
          </table>
        </div>
      )} 
      
    { show &&
  <div className="z-30 w-80 h-54 bg-gray-800 absolute left-96 ml-60 top-60 text-white p-10 cancel-form">
    <p className=" capitalize ">are you sure you want to cancel this booking?</p>
    <span className="flex flex-row justify-evenly">

    <button className="btn back-btn uppercase w-20" onClick={()=>setShow(false)}>back</button>
    <button className="btn btn-danger uppercase w-20" onClick={()=>dispatch(deleteBooking(id))&&setShow(false)}>yes</button>
    </span>

  </div>
}
    </div>
  );
};

export default UserProfile;
// 
