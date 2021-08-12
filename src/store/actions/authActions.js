import { SET_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";
import Swal from "sweetalert2";

//signup action
export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
      history.push("/main");
      message("success", "Your account has been successfully created!", 2500);
    } catch (error) {
      console.log(error.message);
      message("error","An error has occured while creating your account", 2500);
    }
  };
};

//signin action
export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.push("/");
      message("success", "Welcome back!", 2500);
    } catch (error) {
      console.log(error.message);
      message("error", "Invalid username or password", 2500);
    }
  };
};
//signout action

export const signout = (history) => {
  history.push("/");
  message("success", "See You Soon", 2500);
  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    return {
      type: SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: SET_USER,
      payload: null,
    };
  }
};

export const checkForToken = () => async (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (user.exp > currentTime) {
      dispatch(setUser(token));
      return;
    }
  }
  dispatch(setUser());
};
export const message = (icon, message, timer) => {
  Swal.fire({
    icon: icon,
    title: message,
    timer: timer,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
