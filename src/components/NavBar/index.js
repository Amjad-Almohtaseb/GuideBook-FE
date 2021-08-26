import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
import {SiGoogleearth} from "@react-icons/all-files/si/SiGoogleearth"
// import { GrFormEdit } from "@react-icons/all-files/gr/GrFormEdit";

// NavLink tobe used //

// Actions
import { signout } from "../../store/actions/authActions";


const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const handleSignout = () => {
    dispatch(signout(history));
  };

  return (
    <div
      style={{ backgroundColor: "#fca311" }}
      className="navbar shadow-lg nav-txt fixed"
    >
        <span>

        <SiGoogleearth size={35} color={"#14213d"} className="logo-icon "/>
        </span>
        <span className=" text-gray-900  logo">
          Guide Book 
        </span>
     
     
     
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          {!user && (
            <>
               
      <span>
      <Link to="/" >
        <span className="text-3xl font-bold btn btn-ghost rounded-btn text-nav2 absolute right-80 top-3  ">
          Home
        </span>
      </Link>
      </span>
              <Link to={{ pathname: "/signup", state: { type: "tourguide" } }}>
                <span className="btn btn-ghost btn-sm text-nav2">
                  Become a guide
                </span>
              </Link>

              <Link to="/signin">
                <span className="btn btn-ghost btn-sm text-nav2">login</span>
              </Link>
            </>
          )}
         {user&&user.type==="user"&&<Link to={`/user/${user.slug}`}>
         <span>
      <Link to="/" >
        <span className="text-3xl font-bold btn btn-ghost rounded-btn text-nav2 absolute right-44 top-3  ">
          Home
        </span>
      </Link>
      </span>
         <span className="btn btn-ghost btn-sm text-nav2">
                 My Profile
                </span>
         </Link>}
         {user&&user.type==="guide"&&<Link to="/guideprofile">
         <Link to="/" >
        <span className="text-3xl font-bold btn btn-ghost rounded-btn text-nav2 absolute right-44 top-3  ">
          Home
        </span>
      </Link>
         <span className="btn btn-ghost btn-sm text-nav2">
                 My Profile
                </span>
         </Link>}
          {user && (
            <Link
              onClick={handleSignout}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <RiLogoutBoxRLine size={25} className="mt-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;