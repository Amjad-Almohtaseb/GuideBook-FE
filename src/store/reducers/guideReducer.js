import { FETCH_GUIDES } from "../actions/types";

const initialState = {
  guides: [],
  loading: true,
};

const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GUIDES:
      return {
        ...state,
        guides: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default guideReducer;
