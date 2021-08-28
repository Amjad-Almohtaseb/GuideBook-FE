import React from "react";
import { Link } from "react-router-dom";

const GuideItem = ({ guide }) => {
  let avg = guide.avgOfRating;
  const viewRating = () => {
    switch (avg) {
      case 1:
        return <h6>⭐</h6>;
      case 2:
        return <h6>⭐⭐</h6>;
      case 3:
        return <h6>⭐⭐⭐</h6>;
      case 4:
        return <h6>⭐⭐⭐⭐</h6>;
      case 5:
        return <h6>⭐⭐⭐⭐⭐</h6>;
      default:
        // new
        return <div className="new-guide">new</div>;
    }
  };

  return (
    <Link to={`/guides/${guide.user.slug}`}>
      <div className="card  absolute flex  max-w-xl p-3 mx-auto personal-card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img h-40 "
              src={guide.user.image}
              alt={guide.user.username}
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h4 className="card-title absolute top-10 text-gray-900 capitalize">
                {/* @{guide.user.username} */}
                {guide.user.firstname}
              </h4>

              <p className="card-text absolute  top-10 text-blue-600 left-3/4 -ml-3">
                <h4>${guide.price}/person</h4>
              </p>
              <hr className=" relative right-3 top-16" />
              <h6 className="card-title absolute bottom-10 text-gray-900 top-32">
                Max group size
              </h6>
              <h5 className="card-title left-64 absolute bottom-2 text-gray-900 ml-4">
                {guide.maxsize}
              </h5>
               
               <span className="r-stars">
              <span className=" flex flex-col  top-32  w-40">
                <h6 className=" mx-auto card-title bottom-10 text-gray-900 ">Rating</h6>
                <p className=" mx-auto">{viewRating()}</p>
              </span>
              </span>

            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideItem;
