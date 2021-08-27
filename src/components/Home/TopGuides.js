// future work

import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";


const TopGuides = ({guide}) => {
  console.log(guide);
  const cityLoading = useSelector((state) => state.cities.loading);
  if (cityLoading) return <Spinner />;

  return (
<>
       
        {/* card */}
        <div className=" overflow-hidden shadow-lg w-80 top-card">
          <img
            className=" w-96 h-72 "
            src={guide.user.image}
            alt={guide.user.username}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{guide.user.fullname}</div>
            {/* <p className="text-gray-700 text-base">
{guide.description}
            </p> */}
          </div>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
              #{guide.city.name}
            </span>
 
        </div>


</>
  );
};

export default TopGuides;
