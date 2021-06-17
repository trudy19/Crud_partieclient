

import {     RECRUITER_FETCH_LIST_SEEKER_FAIL,RECRUITER_FETCH_LIST_SEEKER_SUCCESS,RECRUITER_FETCH_LIST_SEEKER_REQUEST
  ,EDIT_JOB_REQUEST,EDIT_JOB_SUCCESS,EDIT_JOB_FAIL, RECRUITER_DELETE_JOB_SUCCESS,RECRUITER_DELETE_JOB_FAIL,RECRUITER_DELETE_JOB_REQUEST,POST_JOB_REQUEST,POST_JOB_SUCCESS,POST_JOB_FAIL,USER_LOGOUT,RECRUITER_FETCH_JOB_REQUEST,RECRUITER_FETCH_JOB_SUCCESS,RECRUITER_FETCH_JOB_FAIL,  } from "../types";



function PostJob(state = {}, action) {

switch (action.type) {
  case POST_JOB_REQUEST:
    return { loading: true , success:false };
  case POST_JOB_SUCCESS:
    return { loading: false,success:true , response: action.payload };
  case POST_JOB_FAIL:
    return { loading: false ,success:false};
    case USER_LOGOUT:
      return {};

  default: return state;
}
}



function RecruiterFetchJobReducer(state = {listjobsrecruiter:JSON.parse(localStorage.getItem('listjobsrecuiter'))}, action) {

  switch (action.type) {
    case RECRUITER_FETCH_JOB_REQUEST:
      return { loading: true };
    case RECRUITER_FETCH_JOB_SUCCESS:
      return { loading: false, listjobsrecruiter: action.payload };
    case RECRUITER_FETCH_JOB_FAIL:
      return { loading: false };

  
    default: return state;
  }
  }

  function RecruiterJobJobReducer(state = {}, action) {

    switch (action.type) {
      case RECRUITER_DELETE_JOB_REQUEST:
        return { loading: true,success: false  };
      case RECRUITER_DELETE_JOB_SUCCESS:
        return { loading: false, success: true };
      case RECRUITER_DELETE_JOB_FAIL:
        return { loading: false ,success: false };
  
    
      default: return state;
    }
    }




function RecruiterEditJobReducer(state = {}, action) {

  switch (action.type) {
    case EDIT_JOB_REQUEST:
      return { loading: true,success: false };
    case EDIT_JOB_SUCCESS:
      return { loading: false, success: true };
    case EDIT_JOB_FAIL:
      return { loading: false,success: false };
  
  
    default: return state;
  }
  }
  


function ListSeekerRecruiterJobReducer(state = {listseekerrecruiter:JSON.parse(localStorage.getItem('listseekerrecruiter'))}, action) {

  switch (action.type) {
    case RECRUITER_FETCH_LIST_SEEKER_REQUEST:
      return { loading: true,success:false };
    case RECRUITER_FETCH_LIST_SEEKER_SUCCESS:
      return { loading: false,success:true, listseekerrecruiter: action.payload };
    case RECRUITER_FETCH_LIST_SEEKER_FAIL:
      return { loading: false,success:false };

  
    default: return state;
  }
  }
  
  
export {
  PostJob,RecruiterFetchJobReducer
  ,RecruiterJobJobReducer,RecruiterEditJobReducer,ListSeekerRecruiterJobReducer
  }