import React from "react";
import UserEdit from "../User/UserEdit";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import GuideEdit from "./GuideEdit";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdSmartphone} from "@react-icons/all-files/md/MdSmartphone";
import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import { ImLocation2 } from "@react-icons/all-files/im/ImLocation2";

const GuideProfile = () => {
 
  const user = useSelector((state) => state.user);
  const guides = useSelector((state) => state.guides.guides);
  const guide = guides.find((guide) => guide.user._id === user._id);
  const bookings = useSelector((state) => state.bookings.bookings);
  const booking = bookings.filter((book) => book.guide._id === guide._id);
  // console.log(bookingtable)
  let today = new Date().toISOString().substr(0, 10);

  const bookingtable = booking.map((book) => (
    <>
    <tr className="font-semibold capitalize  ">
     
      <td>{book.user.fullname}</td>
      <td>{user.fullname}</td>
      <td>{book.startingDate}</td>
      <td>{book.endDate}</td>
      <td>{book.groupSize}</td>
      <td>${book.guide.price * book.groupSize}</td>
      {today > book.endDate ? (
        <td className=" text-green-500 uppercase" >completed</td>
      ) : today < book.startingDate ? (
        <td className="text-yellow-400 uppercase">scheduled</td>
      ) : (
        <td className=" text-purple-500 uppercase">in progress</td>
      )}
      <hr/>
    </tr> 
    
    </>
  ));

  const guideLoading = useSelector((state) => state.guides.loading);
  if (guideLoading) return <Spinner />;

  return (
    <>
      <div className="card  flex flex-row profile-card ">
        
        <div className="rounded overflow-hidden shadow-md w-96  border-1 ml-6 mt-3 card1-p  ">
        <UserEdit  />
          <img
            className="  w-60 h-60 mx-auto rounded-full  border-1 border-black"
            src={guide.user.image}
            alt="Mountain"
          />
          <div className="px-6 py-2 text-center">
            <div>
              Username{" "}
              <p className=" font-semibold text-xl mb-3">
                @{guide.user.username}
              </p>
            </div>

            <div>
              Fullname{" "}
              <p className=" font-semibold text-xl mb-3">{`${guide.user.firstname}  ${guide.user.lastname}`}</p>
            </div>
            <div>
  
              <p className=" font-semibold text-xl mb-3"><MdEmail size={20} className=" inline" /> {guide.user.email}</p>
            </div>
            {guide.user.phone && (
              <div>
               
                <p className=" font-semibold text-xl mb-3">
                <MdSmartphone size={20} className=" inline" /> {guide.user.phone}
                </p>
              </div>
            )}
            {guide.user.gender && (
              <div>
                Gender
                <p className=" font-semibold text-xl mb-3">
                  {guide.user.gender}
                </p>
              </div>
            )}
          </div>
         
        </div>
        {booking.length!==0 &&
        <div className=" guide-table text-center mx-12 mt-3 ">
          <table className="table mx-2.5 mt-1 ">
            <thead className="  text-white bg-gray-700 capitalize">
              <tr>
             
                <th scope="col">tourest name</th>
                <th scope="col">guide name</th>
                <th scope="col">from</th>
                <th scope="col">to</th>
                <th scope="col">group size</th>
                <th scope="col">total price</th>
                <th scope="col">status</th>

              </tr>
            </thead>
            <tbody>

              
              {bookingtable}
             
            </tbody>
          </table>
        </div>}

        {/* card2 */}
        {guide && (guide.price || guide.maxsize>1 || guide.rating) && (
          <div
            className=" absolute rounded overflow-hidden shadow-md   border-1 ml-4 mt-3 guide-card
     w-44 text-center  "
          >
            <div className="px-6 py-4 ">
              {guide.city && guide.city.name && (
                <div>
                  City
                  <p className=" font-semibold text-xl mb-2">
                    <ImLocation2 size={22} className="inline mb-1"/>
                     {guide.city.name}
                  </p>
                </div>
              )}

              {guide.price && (
                <div>
                  Price/person
                  
                  <p className=" font-semibold text-xl mb-2"><AiFillDollarCircle size={20} className=" inline mb-1"/> {guide.price} </p>
                </div>
              )}

              {guide.maxsize && (
                <div>
                  Max group size
                  <p className=" font-semibold text-xl mb-2">
                   <HiUserGroup size={20} className=" inline mb-1" /> {guide.maxsize}</p>
                </div>
              )}

              {guide.rating && (
                <div>
                  Your rating
                  <p className=" font-semibold text-xl mb-2">{guide.rating}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* card 3 */}
        {guide && guide.description && (
          <div className=" absolute rounded overflow-hidden shadow-md  border-1 ml-4 mt-3 text-justify bio pt-4  ">
            {guide.description && (
              <span>
               <span className=" ml-56 capitalize font-bold">description</span> 
                <p className="  text-xl mb-2 pr-8 pl-56 des-text mt-2 ">{guide.description}</p>
              </span>
            )}
          </div>
        )}

        <GuideEdit guide={guide} />
      </div>
    </>
  );
};

export default GuideProfile;
