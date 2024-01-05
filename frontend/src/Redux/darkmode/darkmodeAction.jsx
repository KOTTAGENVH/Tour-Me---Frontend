/* eslint-disable no-unused-vars */
import { darkmodeSlice } from "./darkmodeSlice";

const darkmodeActions = darkmodeSlice.actions;

//Set Darkmode
export const setdarkmode = (darkmode) => async (dispatch) => {
    try {
        console.log("darkmode",darkmode)
        dispatch(darkmodeActions.setDarkModeResponse({ darkmode }));
    } catch (error) {
        console.log(error);
    }
    }



