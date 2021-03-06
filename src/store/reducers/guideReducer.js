import {
  FETCH_GUIDES,
  SEARCH_GUIDES,
  UPDATE_GUIDE,
  UPDATE_USER,
} from "../actions/types";

const initialState = {
  guides: [],
  foundguides: JSON.parse(window.localStorage.getItem("searchGuides")) || [],

  loading: true,
  searchInfo: JSON.parse(window.localStorage.getItem("searchInfo")) || {},
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
      return {
        ...state,
        guides: state.guides.map((guide) =>
          guide._id === updatedGuide._id ? updatedGuide : guide
        ),
      };

    case SEARCH_GUIDES:
      return {
        ...state,
        foundguides: action.payload.guidesList,
        searchInfo: action.payload.searchInfo,
      };
    case UPDATE_USER:
      return {
        ...state,
        guides: state.guides.map((guide) =>
          guide.user._id === action.payload.updatedUser._id
            ? { ...guide, user: action.payload.updatedUser }
            : guide
        ),
      };

    default:
      return state;
  }
};

export default guideReducer;
