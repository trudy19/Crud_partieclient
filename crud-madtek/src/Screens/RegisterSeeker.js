import React, { useState,useEffect, }  from 'react';
import {useDispatch,useSelector} from "react-redux";
import {RegisterSeekerAction} from "../Redux/Actions/SeekerActions";

function RegisterSeeker(props) {

    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [location,setlocation]=useState('');

    const [confimpassword,setconfirmpassword]=useState('');
    const userSignin =useSelector(state=>state.userSignin);
    const {error,success,userInfo}=userSignin;
    const redirect =props.location.search ? props.location.search.split('=')[1] : '/signin';


    const dispatch=useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
      
        console.log(name+email+password)
        dispatch(RegisterSeekerAction(name,email,location,password));
        console.log("jjjdfkdfkdfldkfdkkdgogoo")
        
      };


      useEffect(()=>{
        if(userInfo){
                  props.history.push(redirect)};
        if(success)
              {props.history.push(redirect);}
         
      },[dispatch,success]);


    return (
        <div className ="register-recruiter">
            <div className="form-register-img">
             <img class="w3d32" src="/recruiter.webp">
             </img>   
            </div>
        
        
            <a  href="/signin">
                <div className ="w4d1" >
                            <span className="w4d12" >
                            ALREADY USER ? 
                             </span>
               
                            <div className="w4d13" >
                                <div className="w4d131" >LOGIN</div>
                             </div>
                </div>
            </a>
        <form className="form-register" onSubmit={submitHandler}>
           
            <ul className="form-container-register">
                <li>
                  <h2>Sign-UP</h2>
                </li>
                <li> 
                    <label>Name</label>
                    <input name="text" type="text" required="true" onChange={(e)=>setname(e.target.value) } ></input>  
                </li>
                 <li>
                    <label>email</label>
                     <input name="email" type="email" required="true" onChange={(e)=>setemail(e.target.value) } ></input>  
                </li>
                <li>
                    <label>Location</label>
                     <input name="location" type="text" required="true" onChange={(e)=>setlocation(e.target.value) } ></input>  
                </li>
                <li>  
                    <label>password</label>
                    <input type="password" required="true" id="password" name="password" onChange={(e)=>setpassword(e.target.value) } ></input>   
                </li>
                <li>  
                    <label>Confirm password</label>
                    <input type="password" required="true" id="confirmpassword" name="confirmpassword" onChange={
                        (e)=>{setconfirmpassword(e.target.value) ;
                        if(password!=confimpassword){                   
                        } } } ></input>   
                </li>
                <div>
                { error!=null ?
                      (<h3 className="error"> {error}</h3>):<div></div> }</div>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
            </ul>
        </form>
        
        </div>
        
            );
}

export default RegisterSeeker;