import React from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { newBooking } from "../../store/actions/bookingActions";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdSmartphone } from "@react-icons/all-files/md/MdSmartphone";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import { ImLocation2 } from "@react-icons/all-files/im/ImLocation2";
import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle";

//pics
import one from "../../pics/1.jpg";
import two from "../../pics/2.jpg";
import three from "../../pics/3.jpg";
import four from "../../pics/4.jpg";
import five from "../../pics/5.jpg";

const GuideDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchInfo = useSelector((state) => state.guides.searchInfo);
  const guideLoading = useSelector((state) => state.guides.loading);
  const guides = useSelector((state) => state.guides.guides);
  const user = useSelector((state) => state.user);

  const guideSlug = useParams().guideSlug;
  if (guideLoading) return <Spinner />;
  const guide = guides.find((guide) => guide.user.slug === guideSlug);
  console.log(searchInfo);
  const handleBooking = () => {
    dispatch(
      newBooking(
        {
          guide: guide._id,
          cityName: guide.city.name,
          choosenDates: searchInfo.dates,
          groupSize: +searchInfo.maxsize,
        },
        history
      )
    );
  };

  return (
    <>
      <div className="card  flex flex-row profile-card ">
        <div className="rounded overflow-hidden shadow-md w-96  border-1 ml-6 mt-3 card1-p  ">
          <img
            className="  w-60 h-60 mx-auto rounded-full  border-1 border-black mt-4"
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
              
              <p className=" font-semibold text-xl mb-3"><MdEmail size={20} className="inline" /> {guide.user.email}</p>
            </div>
            {guide.user.phone && (
              <div>
                
                <p className=" font-semibold text-xl mb-3">
                <MdSmartphone size={20} className="inline" /> {guide.user.phone}
                </p>
              </div>
            )}
            {guide.user.gender && (
              <div>
                Gender
                <p className=" font-semibold text-xl ">{guide.user.gender}</p>
              </div>
            )}
          </div>
          {user ? (
            <button
              className="btn btn-warning w-56 -mt-5 ml-20"
              onClick={() => handleBooking()}
            >
              BOOK
            </button>
          ) : (
            <button
              className="btn btn-warning w-56 -mt-5 ml-20"
              onClick={() => history.push("/signin")}
            >
              BOOK
            </button>
          )}
        </div>

        {/* slider TODO */}

        <div className="slider-cont">
          <section className="auto-slider">
            <div id="slider">
              <figure>
                <img src={one} alt="istanbul1" className=" h-80" />
                <img src={two} alt="istanbul2" />
                <img src={three} alt="istanbul3" />
                <img src={four} alt="istanbul4" className=" h-80" />
                <img src={five} alt="istanbul5" className=" h-80" />
              </figure>
              <div className="indicator"></div>
            </div>
          </section>
        </div>

        {guide && (guide.price || guide.maxsize || guide.rating) && (
          <div
            className=" absolute rounded overflow-hidden shadow-md   border-1 ml-4 mt-3 guide-card
     w-44 text-center  "
          >
            <div className="px-6 py-4 ">
              {guide.city && guide.city.name && (
                <div>
                  City
                  <p className=" font-semibold text-xl mb-2">
                    <ImLocation2 size={22} className="inline mb-1" />
                    {guide.city.name}
                  </p>
                </div>
              )}

              {guide.price && (
                <div>
                  Price/person
                  <p className=" font-semibold text-xl mb-2">
                    <AiFillDollarCircle size={20} className=" inline mb-1" />{" "}
                    {guide.price}{" "}
                  </p>
                </div>
              )}

              {guide.maxsize && (
                <div>
                  Max group size
                  <p className=" font-semibold text-xl mb-2">
                    <HiUserGroup size={20} className=" inline mb-1" />{" "}
                    {guide.maxsize}
                  </p>
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
                <p className="  text-xl mb-2 pr-8 pl-56 des-text mt-2 ">
                  {guide.description}
                </p>
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default GuideDetail;
