import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
import {SiGoogleearth} from "@react-icons/all-files/si/SiGoogleearth"
// import { GrFormEdit } from "@react-icons/all-files/gr/GrFormEdit";

// NavLink tobe used //

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
               
      {/* <span>
      <Link to="/" >
        <span className="text-3xl font-bold btn btn-ghost rounded-btn text-nav absolute right-80 top-3  ">
          Home
        </span>
      </Link>
      </span> */}
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
         <span>
      <Link to="/" >
        <span className="text-3xl font-bold btn btn-ghost rounded-btn text-nav absolute right-44 top-3  ">
          Home
        </span>
      </Link>
      </span>
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

//must be instead of the comment above /********** */
// {user && user.type === "user" && (
//   <span className=" h-12 w-52 border-1 border-yellow-500 relative mr-8">
//     <img
//       className=" left-2 absolute  h-12 w-12 rounded-full mr-2"
//       /*src={user.image}*/ src="https://i.imgur.com/QRPuQLc.jpg"
//       alt={myuser.username}
//     />

//     <GrFormEdit
//       className=" cursor-pointer absolute left-44 -top-1"
//       size={25}
//     />

//     <h6 className=" text-xl text-nav absolute left-20 mt-2 ">
//       {" "}
//       {user.firstname}{" "}
//     </h6>
//   </span>
// )}
