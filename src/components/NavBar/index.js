import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
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
      className="navbar shadow-lg text-neutral-content rounded-box nav-txt fixed"
    >
      <Link to="/" className="flex-1 px-2 mx-2">
        <span className="text-3xl font-bold btn btn-ghost rounded-btn text-nav">
          {/* <img className="w-10 h-10" src="https://static.thenounproject.com/png/2291745-200.png" alt="logo" /> */}
          Tourist Guide
        </span>
      </Link>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          {!user && (
            <>
              <Link to={{ pathname: "/signup", state: { type: "tourguide" } }}>
                <span className="btn btn-ghost btn-sm text-nav">
                  register as a guide
                </span>
              </Link>
              <Link to={{ pathname: "/signup", state: { type: "user" } }}>
                <span className="btn btn-ghost btn-sm text-nav">signup</span>
              </Link>
              <Link to="/signin">
                <span className="btn btn-ghost btn-sm text-nav">signin</span>
              </Link>
            </>
          )}
       {/* userInfo must be here */}
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