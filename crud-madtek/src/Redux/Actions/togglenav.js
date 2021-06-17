


import { TOGGLE, USER_SIGNIN_FAIL,USER_REGISTER_SUCCESS,USER_SIGNIN_SUCCESS,USER_SIGNIN_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_REQUEST } from "../types";
import Axios from "axios";
import Cookie from 'js-cookie';

export const toggle = (openedorno) => async (dispatch) => {
    dispatch({ type: TOGGLE, payload: openedorno });
    localStorage.setItem("toggle1",JSON.stringify(openedorno));

    
  }