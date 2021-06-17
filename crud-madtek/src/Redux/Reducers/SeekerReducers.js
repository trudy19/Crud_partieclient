

import {  SEEKER_FETCH_JOB_FAIL,SEEKER_FETCH_JOB_SUCCESS,SEEKER_FETCH_JOB_REQUEST,JOB_APPLY_REQUEST,JOB_APPLY_SUCCESS,JOB_APPLY_FAIL } from "../types";



  function JobApplyReducer(state={}, action) {

        switch (action.type) {
          case JOB_APPLY_REQUEST:
            return { loading: true ,success:false};
          case JOB_APPLY_SUCCESS:
            return { loading: false,success:true};
          case JOB_APPLY_FAIL:
            return { error:action.payload, loading: false,success:false};
        
          default: return state;
        }
        }
        



function SeekerFetchJobReducer(state = {listjobsseeker:JSON.parse(localStorage.getItem('listjobsseeker'))}, action) {

    switch (action.type) {
        case SEEKER_FETCH_JOB_REQUEST:
              return { loading: true,success:false };
        case SEEKER_FETCH_JOB_SUCCESS:
              return { loading: false,success:true, listjobsseeker: action.payload };
        case SEEKER_FETCH_JOB_FAIL:
              return { loading: false,success:false };
                 
        default: return state;
                           }
    }

        export {
          JobApplyReducer,SeekerFetchJobReducer
        }

