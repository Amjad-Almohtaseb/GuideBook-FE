import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

const GuideDetail = () => {
  const history=useHistory()
  const guideLoading = useSelector((state) => state.guides.loading);
  const guides = useSelector((state) => state.guides.guides);

  const guideSlug = useParams().guideSlug;
  if (guideLoading) return <Spinner />;
  const guide = guides.find((guide) => guide.user.slug === guideSlug);

  return (
    <>
      <div className="card  flex flex-row profile-card ">
        <div className="rounded overflow-hidden shadow-lg w-96 border-yellow-400  border-1 ml-4 mt-3 card1-p ">
          <img
            className=" w-96 h-56 rounded mx-auto "
            src={guide.user.image}
            alt="Mountain"
          />
          <div className="px-6 py-4 text-center">
            <div>
              username:{" "}
              <p className=" font-semibold text-xl mb-3">
                @{guide.user.username}
              </p>
            </div>

            <div>
              fullname:{" "}
              <p className=" font-semibold text-xl mb-3">
                {guide.user.fullname}
              </p>
            </div>
            <div>
              e-mail:{" "}
              <p className=" font-semibold text-xl mb-3">{guide.user.email}</p>
            </div>
            {guide.user.phone && (
              <div>
                phone:
                <p className=" font-semibold text-xl mb-3">
                  {guide.user.phone}
                </p>
              </div>
            )}
            {guide.user.gender && (
              <div>
                gender:
                <p className=" font-semibold text-xl mb-3">
                  {guide.user.gender}
                </p>
              </div>
            )}
            <button
              className="btn btn-warning w-36 mt-2"
              onClick={() => history.push("/bookings")}
            >
              BOOK
            </button>
          </div>
        </div>
        {/* card2 */}
        {(guide.city || guide.price || guide.maxsize || guide.rating) && (
          <div
            className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card
     w-44 text-center  "
          >
            <div className="px-6 py-4 ">
              {guide.city.name && (
                <div>
                  city:
                  <p className=" font-semibold text-xl mb-2">
                    {guide.city.name}
                  </p>
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
        

        )}

                   {/* card 3 */}
        {guide && guide.description && (
          <div className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card text-center bio pt-4  ">
            {guide.description && (
              <span>
                discription:
                <p className="  text-xl mb-2 px-6 ">{guide.description}</p>
              </span>
            )}
          </div>
        )}

      </div>
    </>
  );
};

export default GuideDetail;
