import React from "react";
import { FaUserEdit } from "@react-icons/all-files/fa/FaUserEdit";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";



const GuideProfile = () => {
    //dummy data
  const guide = {
    _id: 12,
    username: "amjadusername",
    firstname: "amjad",
    lastname: "mohtaseb",
    email: "aas@gmail.com",
    phone: 4685655245,
    image:
      "https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/02/iStock-1163542789-945x630.jpg",
    gender: "male",

    city: "madba",
    price: 5,
    maxsize: 5,
    rating: "⭐⭐⭐",
    // rating: 4,

    discription:
      "hghg khgbj k jhvd lllll knf cdsp imm mmfmuu ihfdkn jhvsuyd dhdwlksd dsldjnmb m powdmn dmjb  lllll knf cdsp imm mmfmuu ihfdkn lllll knf cdsp imm mmfmuu isp imm mmfmuu ihfdknugdyghdb m kwndjk  m mlm mmmml lllll knf cdsp imm mmfmuu ihfdkn  ihfdknugdyghdb m kwndjk  m mlm mmmml lllll knf cdsp imm mmfmuu  ihfdknugdyghdb m kwndjk  m mlm mmmml lllll knf cdsp imm mmfmuu",
    notAvailabeDates: [],
  };

  return (
      <>
    <div className="card  flex flex-row profile-card ">
      <div className="rounded overflow-hidden shadow-lg w-96 border-yellow-400  border-1 ml-4 mt-3 ">
        <img
          className=" w-96 h-56 rounded mx-auto "
          src={guide.image}
          alt="Mountain"
        />
        <div className="px-6 py-4 text-center">
          <div>
            username:{" "}
            <p className=" font-semibold text-xl mb-3">@{guide.username}</p>
          </div>

          <div>
            fullname:{" "}
            <p className=" font-semibold text-xl mb-3">{`${guide.firstname}  ${guide.lastname}`}</p>
          </div>
          <div>
            e-mail: <p className=" font-semibold text-xl mb-3">{guide.email}</p>
          </div>

          <div>
            phone: <p className=" font-semibold text-xl mb-3">{guide.phone}</p>
          </div>

          {guide.gender && (
            <div>
              gender:
              <p className=" font-semibold text-xl mb-3">{guide.gender}</p>
            </div>
          )}
        </div>
        <FaUserEdit
          className=" ml-2 cursor-pointer  "
          size={28}
          onClick={() => alert("edit user profile")}
        />
      </div>


      {/* card2 */}
      {(guide.city || guide.price || guide.maxsize || guide.rating) &&
      <div
        className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card
     w-44 text-center  "
      >
        <div className="px-6 py-4 ">
          {guide.city && (
            <div>
              city:
              <p className=" font-semibold text-xl mb-2">{guide.city}</p>
            </div>
          )}

          {guide.price && (
            <div>
              price/person:
              <p className=" font-semibold text-xl mb-2">{guide.price} $</p>
            </div>
          )}

          {guide.maxsize && (
            <div>
              max group size:
              <p className=" font-semibold text-xl mb-2">{guide.maxsize}</p>
            </div>
          )}

          {guide.rating && (
            <div>
              your rating:
              <p className=" font-semibold text-xl mb-2">{guide.rating}</p>
            </div>
          )}
        </div>
      </div>
      }
                 
                 {/* card 3 */}
      {guide.discription && (
        <div className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card text-center bio pt-4  ">
          {guide.discription && (
            <span>
              discription:
              <p className="  text-xl mb-2 px-6 ">{guide.discription}</p>
            </span>
          )}
        </div>
      )}


<div
        className="  flex items-center md:border-2 rounded-full py-2 md:shadow-sm  w-80 absolute bg-white top-60 cursor-pointer guide-btn"
        onClick={() =>alert("edit guide profile")}
      >
        <span className=" flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600 ">
        Fill The Form To Start 
        Your Job
        </span>

        <FaArrowCircleRight className="hidden md:inline-flex h-8 bg-yellow-500 text-white rounded-full p-2  md:mx-2 w-10" />
      </div>
    </div>
    </>
  );
};

export default GuideProfile;
