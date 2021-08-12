import { FETCH_GUIDES } from "./types";
import instance from "./instance";



export const fetchGuides = () => {
    return async (dispatch) => {
      try {
        const res = await instance.get("/guides");
  
        dispatch({
          type: FETCH_GUIDES,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };