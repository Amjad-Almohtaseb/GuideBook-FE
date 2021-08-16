
import React from "react";
import { Link } from "react-router-dom";

const GuideItem = ({ guide }) => {
  console.log(guide);
  return (
    <Link to={`/guides/${guide.user.slug}`}>
      <div className="card mb-3 absolute flex ml-10 mt-4 max-w-xl">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img h-48 border-1 border-yellow-500"
              src={guide.user.image}
              alt={guide.user.username}
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h4 className="card-title absolute top-10 text-gray-700 ">
                @{guide.user.username}{" "}
              </h4>

              <p className="card-text absolute left-3/4 top-10 text-blue-600">
                <h4>${guide.price}/person</h4>
              </p>
              <hr className=" relative right-3 top-16" />
              <h6 className="card-title absolute bottom-10 text-gray-700">Max group size</h6>
              <h5 className="card-title left-64 absolute bottom-2 text-gray-700">
                {guide.maxsize}
              </h5>

              <h6 className="card-title absolute bottom-10 text-gray-700 left-3/4  ml-9">Rating</h6>
              <p className="card-text absolute right-4 -bottom-2 text-blue-600">

                <h5>⭐⭐⭐⭐⭐</h5>
              </p>
              <p className="card-text">
                <p style={{ color: "blueviolet" }}></p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideItem;
