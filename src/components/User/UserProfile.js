import React from "react";
import { useSelector } from "react-redux";
import UserEdit from "../User/UserEdit";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdSmartphone } from "@react-icons/all-files/md/MdSmartphone";
import Rating from "../Rating";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const guides = useSelector((state) => state.guides.guides);
  const bookings = useSelector((state) => state.bookings.bookings);
  const booking = bookings.filter((book) => book.user._id === user._id);

  let today = new Date().toISOString().substr(0, 10);
  const bookingtable = booking.map((book) => (
    <>
      <tr className="font-semibold capitalize  ">
        <td>{book.user.fullname}</td>
        <td>{book.guide.user.fullname}</td>
        <td>{book.startingDate}</td>
        <td>{book.endDate}</td>
        <td>{book.groupSize}</td>
        <td>${book.guide.price * book.groupSize}</td>

        {today > book.endDate ? (
          <>
            <td className=" text-green-500 uppercase">completed</td>
            <td>
              <Rating guideId={book.guide._id} />
            </td>
          </>
        ) : today < book.startingDate ? (
          <>
            <td className="text-yellow-400 uppercase">scheduled</td>
            <td>
              <Rating guideId={book.guide._id} />
            </td>
            {/* <td>not yet</td> */}
          </>
        ) : (
          <>
            <td className=" text-purple-500 uppercase">in progress</td>
            <td>not yet</td>
          </>
        )}

        <hr />
      </tr>
    </>
  ));

  return (
    <div className="card  flex flex-row profile-card ">
      <div className="rounded overflow-hidden shadow-md  mx-auto border-1 ml-6 mt-3 card1-p user-card-p ">
        <UserEdit />
        <img
          className="  w-60 h-60 mx-auto rounded-full absolute left-56  border-1 border-black"
          src={user.image}
          alt="Mountain"
        />
        <div className="px-6 py-2  text-center">
          <div className="absolute my-2 left-3/4">
            Fullname
            <p className=" font-semibold text-xl mb-3">{user.fullname}</p>
          </div>

          <div className="my-1">
            Username{" "}
            <p className=" font-semibold text-xl mb-3">@{user.username}</p>
          </div>
          <div className="absolute my-3 left-3/4">
            <p className=" font-semibold text-xl mt-8 -ml-28">
              <MdEmail size={25} className=" inline" /> {user.email}
            </p>
          </div>
          {user.phone && (
            <div className="my-4">
              <p className=" font-semibold text-xl mt-16 ">
                <MdSmartphone size={25} className=" inline" /> {user.phone}
              </p>
            </div>
          )}
          {/* {user.gender && (
              <div className="absolute left-1/2 -ml-7  top-52 mt-2  ">
                Gender
                <p className=" font-semibold text-xl mb-3">
                  {user.gender}
                </p>
              </div>
            )} */}
        </div>
      </div>
      {booking.length !== 0 && (
        <div className=" user-table absolute text-center mx-12  ">
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

                <th scope="col">rate your guide</th>
              </tr>
            </thead>
            <tbody>{bookingtable}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
