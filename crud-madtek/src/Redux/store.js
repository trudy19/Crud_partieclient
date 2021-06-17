import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { userSigninReducer, userUpdateReducer } from "./Reducers/UserReducers";
import { RecruiterEditJobReducer,RecruiterJobJobReducer,PostJob,RecruiterFetchJobReducer,ListSeekerRecruiterJobReducer} from "./Reducers/RecruiterReducers";
import { FetchJobsReducer,FetchJobsIndeedReducer} from "./Reducers/JobReducers";
import { togglenavReducer } from "./Reducers/togglenav";
import { JobApplyReducer,SeekerFetchJobReducer } from "./Reducers/SeekerReducers";


const initialState = {
  
 //ListJobsFetch:{ JobList :JSON.parse(localStorage.getItem("JobList")||"[]")},
 //ListJobsFetch:{ userInfo :JSON.parse(localStorage.getItem("userInfo")||"[]")}
 // userInfo :JSON.parse(localStorage.getItem("userInfo")||"[]")

};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    userSignin:userSigninReducer,  
    PostJobresponse: PostJob,
    listJobsFetch:FetchJobsReducer,
    statetoggle: togglenavReducer,
    jobApply :JobApplyReducer,
   recruiterfetchjob: RecruiterFetchJobReducer,
   recruiterdeletejob:RecruiterJobJobReducer,
recruitereditjob:RecruiterEditJobReducer,
seekerfetchjob:SeekerFetchJobReducer,
listseeker:ListSeekerRecruiterJobReducer,
listjobindeed:FetchJobsIndeedReducer,


  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
