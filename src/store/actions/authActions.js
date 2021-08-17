import { SET_USER, UPDATE_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";
import { message } from "../../utlis";
import { fetchGuides, updateUserInsideGuide } from "./guideActions";

//signup action
export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      console.log(res);
      await dispatch(fetchGuides());

      dispatch(setUser(res.data.token));
      if (userData.type === "user") history.push("/");
      if (userData.type === "guide") history.push("/guideprofile");
      // if (userData.type === "guide") history.push("/");

      message("success", "Your account has been successfully created!", 2500);
    } catch (error) {
      message(
        "error",
        "An error has occured while creating your account",
        2500
      );
    }
  };
};

//signin action
export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));

      if (userData.type === "user") history.push("/");
      if (userData.type === "guide") history.push("/guideprofile");
      message("success", "Welcome back!", 2500);
    } catch (error) {
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
    const decodedToken = decode(token);
    return {
      type: SET_USER,
      payload: decodedToken,
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
export const updateUser = (updatedUser, userId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedUser) formData.append(key, updatedUser[key]);
      let res = await instance.put(`/user/${userId}`, formData);

      dispatch({
        type: UPDATE_USER,
        payload: {
          updatedUser: res.data,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};