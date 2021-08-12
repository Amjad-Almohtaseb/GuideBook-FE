import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
// Actions
import { signout } from "../../store/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user.user);

  const handleSignout = () => {
    dispatch(signout(history));
  };

  return (
    <div className="navbar shadow-lg  bg-warning text-neutral-content rounded-box nav-txt">
      <Link to="/" className="flex-1 px-2 mx-2">
        <span  className="text-3xl font-bold btn btn-ghost rounded-btn text-nav">
          Tourist Guide
        </span>
      </Link>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link to={{ pathname: "/signup", state: { type: "tourguide" } }}>
            <span className="btn btn-ghost btn-sm text-nav">register as a guide</span>
          </Link>
          <Link to={{ pathname: "/signup", state: { type: "user" } }}>
            <span className="btn btn-ghost btn-sm text-nav">signup</span>
          </Link>
          {!user?
          <Link to="/signin">
            <span className="btn btn-ghost btn-sm text-nav">signin</span>
          </Link>:""}
          {user ? (
            <Link
              onClick={handleSignout}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <RiLogoutBoxRLine size={25} className="mt-1" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
