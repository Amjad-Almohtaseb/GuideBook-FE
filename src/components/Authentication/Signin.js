import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { signin } from "../../store/actions/authActions";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => dispatch(signin(data, history));

  return (
    <>
      <center>
        <form className=" w-96 mt-24" onSubmit={handleSubmit(onSubmit)}>
          <img
            className="w-16 h-16 mb-4 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTjoR2VIWLrwQywsGICEPAZpd1AR4T6PWUG6h2OdX1ZiZcBq7Lgdy5hJHpXyUut6r6BY&usqp=CAU"
          />
          <h4>Signin</h4>

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
            className="form-control h-12"
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <span role="alert"> password is required</span>
          )}
          <br />
          <button type="submit" className="btn btn-warning w-96 mb-2">
            SIGN IN
          </button>
          <p>
            <Link className="link" to="/signup">
              &nbsp; don't have an account? signup
            </Link>
          </p>
        </form>
      </center>
    </>
  );
};

export default Signin;
