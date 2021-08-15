import React, { useState } from "react";
import { FaUserEdit } from "@react-icons/all-files/fa/FaUserEdit";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/actions/userActions";

const UserEdit = () => {
     const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [profile, setProfile] = useState(
        {

        }   
      );
  const [show, setShow] = useState(false);
  const resetForm = () => {
    setProfile({

    });
  };
    const handleChange=(event)=>{
        setProfile({ ...profile, [event.target.name]: event.target.value });

    }
    const handleImage=(event)=>{
        setProfile({ ...profile, image:event.target.files[0]})

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch(updateUser(profile,user.id));
        setShow(false)
        resetForm();
      };
  return (
    <>
      <FaUserEdit
        className=" ml-2 cursor-pointer  "
        size={28}
        onClick={() => setShow(true)}
      />
      {show && (
        <form onSubmit={handleSubmit}>
          <div className=" absolute top-16 bg-white booking-form ml-20 p-2">
              <div className=" ml-36">

              <label className=" font-bold"> Add your picture </label><br/>
              <input type="file" name="image" onChange={handleImage}/>
              </div><hr/>
              <div className=" ml-36">

              <label className=" font-bold"> Add your phone number </label><br/>
              <input placeholder="+962-000000000" type="tel" name="phone"  className=" border-1" onChange={handleChange}/>
              </div><hr/>
              <div className=" ml-36">
                  
            <select name="gender" className=" w-44 " required onChange={handleChange} >
              <option disabled="disabled" selected="selected" >
                Gender 
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
              </div>
            <hr />

            <button
              className="  bg-red-600 text-black font-bold py-2 px-4 rounded-full mb-3 ml-20 "
              onClick={()=> setShow(false)}
            >
              Cancle{" "}
            </button>
            <button
              type="submit"
              className=" bg-yellow-500 text-black font-bold py-2 px-4 rounded-full ml-20 w-24 "
            >
              Edit{" "}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default UserEdit;
