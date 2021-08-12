import instance from "./instance";
import { FETCH_COUNTRIES } from "./types";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/countries");

      dispatch({
        type: FETCH_COUNTRIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
