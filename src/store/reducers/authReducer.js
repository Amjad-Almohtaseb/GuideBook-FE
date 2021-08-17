import { SET_USER, UPDATE_USER } from "../actions/types";

const authReducer = (state = null, { type, payload }) => {
  // console.log(payload);
  console.log(state);
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