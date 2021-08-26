import React from "react";
import { Link } from "react-router-dom";

const GuideItem = ({ guide }) => {
  let avg = Math.floor(
    guide.rating.length !== 0 &&
      guide.rating.reduce((a, b) => a + b) / guide.rating.length
  );
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
              <h6 className="card-title absolute bottom-10 text-gray-900">
                Max group size
              </h6>
              <h5 className="card-title left-64 absolute bottom-2 text-gray-900">
                {guide.maxsize}
              </h5>

              <span className="absolute flex flex-col  justify-items-start left-3/4  ml-5 top-32">
                <h6 className="card-title  bottom-10 text-gray-900 ">Rating</h6>
                <p>{viewRating()}</p>
              </span>

            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideItem;
