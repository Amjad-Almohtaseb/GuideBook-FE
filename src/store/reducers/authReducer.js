import { SET_USER } from "../actions/types";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

/**
 * @Octowl:
 *
 * How would it change things in the rest of the code if this was your reducer instead?
 */
const alternate_authReducer = (state = null, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};
