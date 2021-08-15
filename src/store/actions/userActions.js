import instance from "./instance";
import { FETCH_USER, UPDATE_USER } from "./types";

export const fetchUser = () => {
    return async (dispatch) => {
      try {
        const res = await instance.get("/users");
  
        dispatch({
          type: FETCH_USER,
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
        console.log(updatedUser)
        const formData= new FormData();
        for(const key in updatedUser)
           formData.append(key,updatedUser[key])
        await instance.put(`/user/${userId}`,formData)
        dispatch({
            type: UPDATE_USER,
            payload: {
                updatedUser:updatedUser,
            }
        })
    } catch (error) {
        console.log(error.message)
    }

}}