import { FETCH_USERS } from "../actions/types";

const initialState = {
  users: [],

  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;