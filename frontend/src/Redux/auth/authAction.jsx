/* eslint-disable no-unused-vars */
import { authSlice, resetState, setLoginResponse, setMessage } from "./authSlice";
import { signIn } from "../../Api/services/authService";


const authActions = authSlice.actions;

//Login
export const loginAction = (username, password) => {


  return async (dispatch) => {
  
    try {
      const response = await signIn(username, password)
      dispatch(setLoginResponse(response));
  
    } catch (error) {
      dispatch(setMessage(error.response.data.message));
    }
  };
};



//Sign Out
export const signOutAction = () => {
  return async (dispatch) => {
    try {
      dispatch(resetState());
    } catch (error) {
      console.error("Sign out error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        dispatch(setMessage(error.response.data.message));
      } else {
        console.error("Sign out error:", error);
        dispatch(setMessage("An error occurred while signing out."));
      }
    }
  };
};
