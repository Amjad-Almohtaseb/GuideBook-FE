import instance from "./instance";
import { FETCH_CITIES } from "./types";

export const fetchCities = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/cities");

      dispatch({
        type: FETCH_CITIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
