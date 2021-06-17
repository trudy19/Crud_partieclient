

import {   RECRUITER_DOWNLOAD_FILE_REQUEST,RECRUITER_DOWNLOAD_FILE_SUCCESS,RECRUITER_DOWNLOAD_FILE_FAIL, RECRUITER_REGISTER_FAIL,RECRUITER_REGISTER_SUCCESS,RECRUITER_REGISTER_REQUEST,EDIT_JOB_REQUEST,EDIT_JOB_SUCCESS,EDIT_JOB_FAIL,RECRUITER_DELETE_JOB_SUCCESS,RECRUITER_DELETE_JOB_FAIL,RECRUITER_DELETE_JOB_REQUEST
  ,POST_JOB_FAIL,POST_JOB_SUCCESS,POST_JOB_REQUEST,RECRUITER_FETCH_JOB_REQUEST,RECRUITER_FETCH_JOB_SUCCESS,RECRUITER_FETCH_JOB_FAIL,  RECRUITER_FETCH_LIST_SEEKER_FAIL,RECRUITER_FETCH_LIST_SEEKER_SUCCESS,RECRUITER_FETCH_LIST_SEEKER_REQUEST
} from "../types";
import Axios from "axios";

const FileDownload = require('js-file-download');




export const PostJob=(data)=>async(dispatch,getState)=>{



  dispatch({ type: POST_JOB_REQUEST });


  const { userSignin: { userInfo }, } = getState();
  try{
console.log("iam heredzdzd")
  console.log(data)
  
  const { a } = await Axios.post("http://localhost:8080/recruiter/job/post/", data,{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );
  //{"title":title,"location":location,"type":type,"skill_required":skill_required,"seniority_level":seniority_level}
  dispatch({ type: POST_JOB_SUCCESS, payload: {a}});


}catch(error){
  dispatch({ type: POST_JOB_FAIL, payload: error.message });
}
}


export const FetchJobRecruiter=()=>async(dispatch,getState)=>{

  try{
    dispatch({ type: RECRUITER_FETCH_JOB_REQUEST});

  const { userSignin: { userInfo }, } = getState();
  const {data}   = await Axios.get("http://localhost:8080/recruiter/jobs/get",{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );

  dispatch({ type: RECRUITER_FETCH_JOB_SUCCESS, payload: data});
  localStorage.setItem("listjobsrecuiter",JSON.stringify(data));



}catch(error){
  dispatch({ type: RECRUITER_FETCH_JOB_FAIL, payload: error.message });
}
}




export const DeleteJobRecruiter=(idofjob)=>async(dispatch,getState)=>{

  try{
    dispatch({ type: RECRUITER_DELETE_JOB_REQUEST});

  const { userSignin: { userInfo }, } = getState();
  await Axios.delete("http://localhost:8080/recruiter/job/delete?jobid="+idofjob,{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );

  dispatch({ type: RECRUITER_DELETE_JOB_SUCCESS,});


}catch(error){
  dispatch({ type: RECRUITER_DELETE_JOB_FAIL, payload: error.message });
}
}






export const EditJobRecruiter=(data)=>async(dispatch,getState)=>{



  dispatch({ type: EDIT_JOB_REQUEST });


  const { userSignin: { userInfo }, } = getState();
  try{
console.log("iam heredzdzd")
  console.log(data)
  
  const { a } = await Axios.put("http://localhost:8080/recruiter/job/edit/", data,{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );
  //{"title":title,"location":location,"type":type,"skill_required":skill_required,"seniority_level":seniority_level}
  dispatch({ type: EDIT_JOB_SUCCESS, payload: {a}});

}catch(error){
  dispatch({ type: EDIT_JOB_FAIL, payload: error.message });
}
} 



export const RegisterRecruiterAction = (username,email,location,password) => async(dispatch) => {
  dispatch({ type: RECRUITER_REGISTER_REQUEST, payload: { username,email,location, password } });
  try {
  const { data } = await Axios.post("http://localhost:8080/auth/recruiter/signup", { "username":username,"email":email,"location":location, "password":password });
  dispatch({ type: RECRUITER_REGISTER_SUCCESS });
  }
  catch (error) {
   // dispatch({ type: RECRUITER_REGISTER_FAIL, payload: error.message });




if (error.response) {
  // Request made and server responded
  console.log(error.response.data);
  dispatch({ type: RECRUITER_REGISTER_FAIL, payload: error.response.data.message });


} else if (error.request) {
  // The request was made but no response was received
  console.log(error.request);
  dispatch({ type: RECRUITER_REGISTER_FAIL, payload: error.error.request});

} else {
  // Something happened in setting up the request that triggered an Error
  console.log('Error', error.message);
  dispatch({ type: RECRUITER_REGISTER_FAIL, payload: error.message });

}
  }
}





export const FetchListSeekersRecruiter=(idofjob)=>async(dispatch,getState)=>{

  try{
    dispatch({ type: RECRUITER_FETCH_LIST_SEEKER_REQUEST});

  const { userSignin: { userInfo }, } = getState();
  const {data}   = await Axios.get("http://localhost:8080/recruiter/seeker/get/?idofjob="+idofjob,{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );

  dispatch({ type: RECRUITER_FETCH_LIST_SEEKER_SUCCESS, payload: data});
  localStorage.setItem("listseekerrecruiter",JSON.stringify(data));


}catch(error){
  dispatch({ type: RECRUITER_FETCH_LIST_SEEKER_FAIL, payload: error.message });
}
}


export const DownloadResume=(path,nameseeker)=>async(dispatch,getState)=>{

  try{
    dispatch({ type: RECRUITER_DOWNLOAD_FILE_REQUEST});

  const { userSignin: { userInfo }, } = getState();
  const {data}   = await Axios.post("http://localhost:8080/recruiter/downloadFile",path,{
  headers:{'Content-Type': 'text/plain',Authorization:'Bearer ' + userInfo.data.token,},responseType: 'blob'}
  );
 // console.log(data);
  let blob = new Blob([data], { type: 'multipart/form-data' });
  ////const url = window.URL.createObjectURL(blob);
  //window.open(url);
  FileDownload(data,nameseeker );
  dispatch({ type: RECRUITER_DOWNLOAD_FILE_SUCCESS, payload: data});
 // localStorage.setItem("listseekerrecruiter",JSON.stringify(data));

}catch(error){
  dispatch({ type: RECRUITER_DOWNLOAD_FILE_FAIL, payload: error.message });
}




}