import { SET_USER, UPDATE_USER } from "../actions/types";

const authReducer = (state = null, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    case UPDATE_USER:
      const { updatedUser } = payload;
      return {
        ...updatedUser,
      };
    default:
      return state;
  }
};

export default authReducer;