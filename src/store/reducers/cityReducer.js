import { FETCH_CITIES } from "../actions/types";


const initialState = {
  cities: [],
  loading: true,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default cityReducer;