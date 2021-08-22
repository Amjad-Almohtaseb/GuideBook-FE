import { NEW_BOOKING, FETCH_BOOKING, DELETE_BOOKING } from "./types";
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

export const deleteBooking = (bookId) => {
  console.log(bookId)
  return async(dispatch)=>{
  try {
      await instance.delete(`/booking/${bookId}`)
      dispatch({
          type: DELETE_BOOKING,
          payload: {
              bookId:bookId,
          }
      })
      dispatch(fetchBooking())
  } catch (error) {
      console.log(error.message)
  }

}}