import { FETCH_COUNTRIES } from "../actions/types";


const initialState = {
  countries: [],
  loading: true,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default countryReducer;