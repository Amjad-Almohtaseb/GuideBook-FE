import { FETCH_USER, UPDATE_USER } from "../actions/types";


const initialState = {
  users: [],
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case UPDATE_USER:
      const { updatedUser } = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        ),

      };
    default:
      return state;
  }
};

export default userReducer;