import instance from "./instance";
import { FETCH_USERS } from "./types";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");

      dispatch({
        type: FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};