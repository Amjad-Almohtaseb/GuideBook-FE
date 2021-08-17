import { SET_USER } from "../actions/types";

const authReducer = (state = null, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};

export default authReducer;