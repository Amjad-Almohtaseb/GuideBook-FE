import { FETCH_GUIDES, SEARCH_GUIDES, UPDATE_GUIDE } from "./types";
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

export const updateGuide = (updatedGuide, guideId) => {
  return async (dispatch) => {
    try {
      console.log(updatedGuide)
      let res = await instance.put(`/guide/${guideId}`, updatedGuide);
      dispatch({
        type: UPDATE_GUIDE,
        payload: {
          updatedGuide: res.data,
        },
      });
      dispatch(fetchGuides())
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchGuide = (searchInfo, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/search", searchInfo);
      const guidesList = res.data;
     window.localStorage.setItem("searchInfo", JSON.stringify(searchInfo));
     window.localStorage.setItem("searchGuides", JSON.stringify(res.data));

      dispatch({
        type: SEARCH_GUIDES,
        payload: { guidesList, searchInfo },
      });
      history.push("/guidelist");
    } catch (error) {
      console.log(error.message);
    }
  };
};
