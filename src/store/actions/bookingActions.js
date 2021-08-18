import { NEW_BOOKING, FETCH_BOOKING } from "./types";
import instance from "./instance";
export const fetchBooking = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/booking");

      dispatch({
        type: FETCH_BOOKING,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const newBooking = (bookingInfo, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/booking", bookingInfo);

      dispatch({
        type: NEW_BOOKING,
        payload: res.data,
      });
      await dispatch(fetchBooking());
      history.push("/bookings");
    } catch (error) {
      console.log(error.message);
    }
  };
};
