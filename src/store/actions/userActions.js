import instance from "./instance";
import { FETCH_USERS, UPDATE_USER } from "./types";

export const fetchUsers = () => {
    return async (dispatch) => {
      try {
        const res = await instance.get("/users");
  
        dispatch({
          type: FETCH_USERS,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };



export const updateUser = (updatedUser,userId) => {
    return async(dispatch)=>{
    try {
    
        const formData= new FormData();
        for(const key in updatedUser)
           formData.append(key,updatedUser[key])
      let res = await instance.put(`/user/${userId}`,formData)
        dispatch({
            type: UPDATE_USER,
            payload: {
                updatedUser:res.data,
            }
        })

    } catch (error) {
        console.log(error.message)
    }

}}