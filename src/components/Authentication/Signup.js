import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signup } from "../../store/actions/authActions";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => dispatch(signup(data, history));
  return (
    <>
      <center>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Signup</h2>
          <hr style={{ width: "35%" }} />

          <input
            placeholder="enter firstname"
            id="firstname"
            type="text"
            className="form-control in"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && errors.firstname.type === "required" && (
            <span role="alert">firstname is required</span>
          )}
          <input
            placeholder="enter lastname"
            id="lastname"
            type="text"
            className="form-control in"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && errors.lastname.type === "required" && (
            <span role="alert">lastname is required</span>
          )}
          <input
            placeholder="enter your email"
            id="email"
            type="email"
            className="form-control in"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert">email is required</span>
          )}
          <input
            placeholder="enter your phone number"
            id="phone"
            type="tel"
            className="form-control in"
            {...register("phone", { required: true })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <span role="alert">phone is required</span>
          )}

          <input
            placeholder="enter username"
            id="username"
            type="text"
            className="form-control in"
            {...register("username", { required: true })}
          />
          {errors.username && errors.username.type === "required" && (
            <span role="alert">username is required</span>
          )}
          <input
            placeholder="enter password"
            id="password"
            type="password"
            className="form-control in"
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <span role="alert">password is required</span>
          )}
          <br />
          <button
            style={{ backgroundColor: "darkcyan" }}
            type="submit"
            className="btn btn-dark"
          >
            Submit
          </button>
          <p>
            Already have an account ?
            <Link className="link" to="/signin">
              &nbsp; signin
            </Link>
          </p>
        </form>
      </center>
    </>
  );
};
export default Signup;
