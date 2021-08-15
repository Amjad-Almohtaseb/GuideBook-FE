import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signin } from "../../store/actions/authActions";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { fetchUser } from "../../store/actions/userActions";

const Signin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchUser())
  }, [])
  const history = useHistory();
 
  // console.log(users)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const users = useSelector(state => state.users.users)
  const userLoading = useSelector(state=> state.users.loading)
  if(userLoading) return <Spinner/>
 
  const onSubmit = (data) =>{
    console.log(data.username)
    console.log(users)
    const userType= users.find(user=>user.username===data.username).type
    if(userType==="user") data.type = "user"
    else data.type="guide"
    
    
    
    dispatch(signin(data, history));
  }
    // const [password, setPassword] = useState(true)
  return (
    <>
      <center>
        <form className=" w-96 mt-24" onSubmit={handleSubmit(onSubmit)}>
          <img
            className="w-16 h-16 mb-4 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTjoR2VIWLrwQywsGICEPAZpd1AR4T6PWUG6h2OdX1ZiZcBq7Lgdy5hJHpXyUut6r6BY&usqp=CAU"
          />
          <h4 className="text-color">Signin</h4>

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
            // type={password ? "password" : "text"}
            type="password"
            className="form-control h-12"
            {...register("password", { required: true })}
            
          />

          {errors.password && errors.password.type === "required" && (
            <span role="alert"> password is required</span>
          )}
          <br />
          <button className="btn button-color w-96 mb-2" type="submit">‏
            SIGN IN
          </button>
          <p>
          <Link style={{ color: "#14213d" }} className="link" to={{pathname:"/signup",state:{type:"user"}}}>
              &nbsp; Don't have an account? signup
            </Link>
          </p>
        </form>
      </center>
    </>
  );
};

export default Signin;
