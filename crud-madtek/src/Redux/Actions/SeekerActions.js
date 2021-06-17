
import {   SEEKER_REGISTER_FAIL,SEEKER_REGISTER_SUCCESS,SEEKER_REGISTER_REQUEST
  ,SEEKER_FETCH_JOB_FAIL,SEEKER_FETCH_JOB_SUCCESS,SEEKER_FETCH_JOB_REQUEST
  ,JOB_APPLY_REQUEST,JOB_APPLY_SUCCESS,JOB_APPLY_FAIL } from "../types";
import Axios from "axios";

export const JobApplyAction=(file,idofjob)=>async(dispatch,getState)=>{

  try{
  
    console.log(file[0]);

    dispatch({ type: JOB_APPLY_REQUEST});

  const { userSignin: { userInfo }, } = getState();
   /*
   var formData = new FormData();
  var imagefile = document.querySelector('#file');
  formData.append("file", imagefile.files[0]);
  
 
  const {data}   = await Axios.post("http://localhost:8080/seeker/apply",formData,idofjob,{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );



console.log(data);*/
const data = new FormData() 
data.append('file', file[0])
data.append('idofjob', idofjob)

let url = "http://localhost:8080/seeker/apply";
const res = await Axios.post(url, data, {
  headers:{Authorization:'Bearer ' + userInfo.data.token,"Content-type": "multipart/form-data",}})
console.log(res);

  dispatch({ type: JOB_APPLY_SUCCESS, payload: "data"});



}catch(error){
  if (error.response) {
    // Request made and server responded
    console.log(error.response.data);
    dispatch({ type: JOB_APPLY_FAIL, payload: "you have been applied" });

  
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
    dispatch({ type: JOB_APPLY_FAIL, payload: error.error.request});

  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    dispatch({ type: JOB_APPLY_FAIL, payload: error.message });

  }

}
}





export const FetchJobSeeker=()=>async(dispatch,getState)=>{

  try{
    dispatch({ type: SEEKER_FETCH_JOB_REQUEST});

  const { userSignin: { userInfo }, } = getState();
  const {data}   = await Axios.get("http://localhost:8080/seeker/job/get",{
  headers:{Authorization:'Bearer ' + userInfo.data.token,}}
  );

  dispatch({ type: SEEKER_FETCH_JOB_SUCCESS, payload: data});
  localStorage.setItem("listjobsseeker",JSON.stringify(data));


}catch(error){
  dispatch({ type: SEEKER_FETCH_JOB_FAIL, payload: error.message });
}
}




export const RegisterSeekerAction = (username,email,location,password,) => async(dispatch) => {
  dispatch({ type: SEEKER_REGISTER_REQUEST, payload: { username,email, password,location } });
  try {
  const { data } = await Axios.post("http://localhost:8080/auth/seeker/signup", { "username":username,"email":email,"location":location, "password":password });
  dispatch({ type: SEEKER_REGISTER_SUCCESS });
  }
  catch (error) {
    dispatch({ type: SEEKER_REGISTER_FAIL, payload: error.message });
  }
}






