import { FETCH_GUIDES, SEARCH_GUIDES, UPDATE_GUIDE } from "../actions/types";

const initialState = {
  guides: [],
  foundguides: [],
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

    case UPDATE_GUIDE:
      const { updatedGuide } = action.payload;
      console.log(updatedGuide);
      return {
        ...state,
        guides: state.guides.map((guide) =>
          guide._id === updatedGuide._id ? updatedGuide : guide
        ),
      
      };
    case SEARCH_GUIDES:
      return {
        ...state,
        foundguides: action.payload,
      };

    default:
      return state;
  }
};

export default guideReducer;
