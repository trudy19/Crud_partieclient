import { FETCH_JOB_REQUEST,FETCH_JOB_SUCCESS,FETCH_JOB_FAIL,FETCH_JOBINDEED_REQUEST,FETCH_JOBINDEED_SUCCESS,FETCH_JOBINDEED_FAIL } from "../types";



function FetchJobsReducer(state={JobList:JSON.parse(localStorage.getItem('joblist'))}, action) {
//response:JSON.parse(localStorage.getItem('JobList'))
    switch (action.type) {
      case FETCH_JOB_REQUEST:
        return { loading: true };
      case FETCH_JOB_SUCCESS:
        return { loading: false, JobList: action.payload };
      case FETCH_JOB_FAIL:
        return {loading: false};
    
      default: return state;
    }
    }

   
  
function FetchJobsIndeedReducer(state={JobIndeedList:JSON.parse(localStorage.getItem('jobindeedlist'))}, action) {
  //response:JSON.parse(localStorage.getItem('JobList'))
      switch (action.type) {
        case FETCH_JOBINDEED_REQUEST:
          return { loading: true };
        case FETCH_JOBINDEED_SUCCESS:
          return { loading: false, JobIndeedList: action.payload };
        case FETCH_JOBINDEED_FAIL:
          return {loading: false};
      
        default: return state;
      }
      }
      
    
    export {
      FetchJobsReducer,FetchJobsIndeedReducer
      }