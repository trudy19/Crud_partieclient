import {  SEEKER_REGISTER_FAIL,SEEKER_REGISTER_SUCCESS,SEEKER_REGISTER_REQUEST,RECRUITER_REGISTER_FAIL,RECRUITER_REGISTER_SUCCESS,RECRUITER_REGISTER_REQUEST,USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../types";




function userSigninReducer(state = {userInfo:JSON.parse(localStorage.getItem('userInfo'))}, action) {
    //userSignin:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true,error:true };
    case USER_SIGNIN_SUCCESS:
       return { loading: false, userInfo: action.payload,error:true};
    case USER_SIGNIN_FAIL:
       return { loading: false,error:true};
    case USER_LOGOUT:
       return {};
    case RECRUITER_REGISTER_REQUEST :
       return {loading:true,success:false,requestregister:action.payload}
    case RECRUITER_REGISTER_SUCCESS :
        return {loading :false,success:true}
    case RECRUITER_REGISTER_FAIL :
        return {loading:false,error :action.payload,success:false}
    case SEEKER_REGISTER_REQUEST :
        return {loading:true,success:false}
    case SEEKER_REGISTER_SUCCESS :
        return {loading :false,userInfo:action.payload ,success:true}
    case SEEKER_REGISTER_FAIL :
        return {loading:false,error :action.payload,success:false}
  default: return state;
}
}

export {
    userSigninReducer
  }