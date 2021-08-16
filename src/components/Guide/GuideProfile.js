import React from "react";
import UserEdit from "../User/UserEdit";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import GuideEdit from "./GuideEdit";

const GuideProfile = () => {
  const guideLoading = useSelector((state) => state.guides.loading);
  const userLoading = useSelector((state) => state.users.loading);
  const guides = useSelector((state) => state.guides.guides);
  const myuser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users.users);
  
  if (userLoading) return <Spinner />;
  const user = users.find((user) => user.id === myuser.id);
  if (guideLoading) return <Spinner />;
  const guide = guides.find((guide) => guide.user._id === user._id);
  console.log(myuser);

  // console.log(guide)

  return (
    <>
      <div className="card  flex flex-row profile-card ">
        <div className="rounded overflow-hidden shadow-lg w-96 border-yellow-400  border-1 ml-4 mt-3 card1-p ">
          <img
            className=" w-96 h-56 rounded mx-auto "
            src={user.image}
            alt="Mountain"
          />
          <div className="px-6 py-4 text-center">
            <div>
              username:{" "}
              <p className=" font-semibold text-xl mb-3">@{user.username}</p>
            </div>

            <div>
              fullname:{" "}
              <p className=" font-semibold text-xl mb-3">{`${user.firstname}  ${user.lastname}`}</p>
            </div>
            <div>
              e-mail:{" "}
              <p className=" font-semibold text-xl mb-3">{user.email}</p>
            </div>
            {user.phone && (
              <div>
                phone:
                <p className=" font-semibold text-xl mb-3">{user.phone}</p>
              </div>
            )}
            {user.gender && (
              <div>
                gender:
                <p className=" font-semibold text-xl mb-3">{user.gender}</p>
              </div>
            )}
          </div>
          <UserEdit />
        </div>

        {/* card2 */}
        {guide&&(guide.price || guide.maxsize || guide.rating) && (
          <div
            className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card
     w-44 text-center  "
          >
            <div className="px-6 py-4 ">
              {guide.city && guide.city.name && (
                <div>
                  city:
                  <p className=" font-semibold text-xl mb-2">
                    {guide.city.name}
                  </p>
                </div>
              )}

              { guide.price && (
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
        {guide&& guide.description && (
          <div className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card text-center bio pt-4  ">
            {guide.description && (
              <span>
                discription:
                <p className="  text-xl mb-2 px-6 ">{guide.description}</p>
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
