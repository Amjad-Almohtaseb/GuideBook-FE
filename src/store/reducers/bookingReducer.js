import { FETCH_BOOKING, NEW_BOOKING } from "../actions/types";

const initialState = {
  booking: [],
  loading: true,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKING:
      return {
        ...state,
        booking: action.payload,
        loading: false,
      };

    case NEW_BOOKING:
      return {
        ...state,
        booking: action.payload,
      };

    default:
      return state;
  }
};

export default bookingReducer;
