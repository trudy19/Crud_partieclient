
import { FETCH_JOBINDEED_REQUEST,FETCH_JOBINDEED_SUCCESS,FETCH_JOBINDEED_FAIL
,  FETCH_JOB_REQUEST,FETCH_JOB_SUCCESS,FETCH_JOB_FAIL } from "../types";
import Axios from "axios";

export const FetchJobs=()=>async(dispatch,getState)=>{

  try{
    dispatch({ type: FETCH_JOB_REQUEST});

  const { userSignin: { userInfo }, } = getState();
  const {data}   = await Axios.get("http://localhost:8080/job/get",{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );

  dispatch({ type: FETCH_JOB_SUCCESS, payload: data});
  localStorage.setItem("joblist",JSON.stringify(data));



}catch(error){
  dispatch({ type: FETCH_JOB_FAIL, payload: error.message });
}
}


export const FetchJobsIndeed=()=>async(dispatch,getState)=>{

  try{
    dispatch({ type: FETCH_JOBINDEED_REQUEST});
//http://localhost:8080/job/get/indeed
  const { userSignin: { userInfo }, } = getState();
  const {data}   = await Axios.get("http://localhost:8080/job/get/indeed",{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );

  dispatch({ type: FETCH_JOBINDEED_SUCCESS, payload: data});
  localStorage.setItem("jobindeedlist",JSON.stringify(data));



}catch(error){
  dispatch({ type: FETCH_JOBINDEED_FAIL, payload: error.message });
}
}



