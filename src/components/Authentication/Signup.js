import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link, useLocation } from "react-router-dom";

import { signup } from "../../store/actions/authActions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const type = useLocation().state.type;
  const onSubmit = (data) => {
    if (type === "user") data.type = "user";
    dispatch(signup(data, history));
  };

  return (
    <>
      <center>
        <form className=" w-96 mt-24" onSubmit={handleSubmit(onSubmit)}>
          <img
            className="w-16 h-16 mb-4 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTjoR2VIWLrwQywsGICEPAZpd1AR4T6PWUG6h2OdX1ZiZcBq7Lgdy5hJHpXyUut6r6BY&usqp=CAU"
          />
          <h2>Signup</h2>

          <input
            placeholder="enter firstname"
            id="firstname"
            type="text"
            className="form-control my-2 h-12 "
            {...register("firstname", { required: true })}
          />
          {errors.firstname && errors.firstname.type === "required" && (
            <span role="alert">firstname is required</span>
          )}
          <input
            placeholder="enter lastname"
            id="lastname"
            type="text"
            className="form-control my-2 h-12 "
            {...register("lastname", { required: true })}
          />
          {errors.lastname && errors.lastname.type === "required" && (
            <span role="alert">lastname is required</span>
          )}
          <input
            placeholder="enter your email"
            id="email"
            type="email"
            className="form-control my-2 h-12 "
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert">email is required</span>
          )}
          <input
            placeholder="enter your phone number"
            id="phone"
            type="tel"
            className="form-control my-2 h-12 "
            {...register("phone", { required: true })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <span role="alert">phone is required</span>
          )}

          <input
            placeholder="enter username"
            id="username"
            type="text"
            className="form-control my-2 h-12 "
            {...register("username", { required: true })}
          />
          {errors.username && errors.username.type === "required" && (
            <span role="alert">username is required</span>
          )}
          <input
            placeholder="enter password"
            id="password"
            type="password"
            className="form-control my-2 h-12 "
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <span role="alert">password is required</span>
          )}
          <br />
          <button type="submit" className="btn btn-warning w-96 mb-2">
            SIGN UP
          </button>
          <p>
            <Link className="link-signup" to="/signin">
              &nbsp; Already have an account ? signin
            </Link>
          </p>
        </form>
      </center>
    </>
  );
};
export default Signup;
