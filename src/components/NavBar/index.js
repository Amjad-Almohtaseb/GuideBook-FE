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
    <div className="navbar mb-2 shadow-lg  bg-warning text-neutral-content rounded-box nav-txt">
      <Link to="/" className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold btn btn-ghost rounded-btn">
          Tourist Guide
        </span>
      </Link>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link to={{ pathname: "/signup", state: { type: "tourguide" } }}>
            <span className="btn btn-ghost btn-sm ">register as a guide</span>
          </Link>
          <Link to={{ pathname: "/signup", state: { type: "user" } }}>
            <span className="btn btn-ghost btn-sm ">signup</span>
          </Link>
          <Link to="/signin">
            <span className="btn btn-ghost btn-sm ">signin</span>
          </Link>
          {user ? (
            <Link
              onClick={handleSignout}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <RiLogoutBoxRLine className="mt-1" />
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
