import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {SiGoogleearth} from "@react-icons/all-files/si/SiGoogleearth"
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";


// Actions
import { signout } from "../../store/actions/authActions";


const HomeNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const handleSignout = () => {
    dispatch(signout(history));
  };

  return (
    <div
    //   style={{ backgroundColor: "#fca311" }}
      className="navbar  nav-txt"
    >
       <Link to="/" >
        <span>
        <SiGoogleearth size={35} color="orange" className="logo-icon "/>
        </span>
        <span className=" text-white  logo">
          Guide Book 
        </span>
        </Link>
     
     
     
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          {!user && (
            <>
               
              <Link to={{ pathname: "/signup", state: { type: "tourguide" } }}>
                <span className="btn btn-ghost btn-sm text-nav">
                  Become a guide
                </span>
              </Link>

              <Link to="/signin">
                <span className="btn btn-ghost btn-sm text-nav">Signin</span>
              </Link>
            </>
          )}
         {user&&user.type==="user"&&<Link to={`/user/${user.slug}`}>
         <span className="btn btn-ghost btn-sm text-nav">
                 My Profile
                </span>
         </Link>}
         {user&&user.type==="guide"&&<Link to="/guideprofile">
         <span className="btn btn-ghost btn-sm text-nav">
                 My Profile
                </span>
         </Link>}
          {user && (
            <Link
              onClick={handleSignout}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <RiLogoutBoxRLine size={25} style={{strokeWidth: 1.5}} color="white" className="mt-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;