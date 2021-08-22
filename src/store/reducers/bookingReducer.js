import { DELETE_BOOKING, FETCH_BOOKING, NEW_BOOKING } from "../actions/types";

const initialState = {
  bookings: [],
  loading: true,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKING:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
      };

    case NEW_BOOKING:
      return {
        ...state,
        bookings: action.payload,
      };
      case DELETE_BOOKING:
      const bookingToKeep = state.bookings.filter(
        (book) => book.id !== action.payload.bookId
      );
      return {
        ...state,
        bookings: bookingToKeep,
      };

    default:
      return state;
  }
};

export default bookingReducer;
