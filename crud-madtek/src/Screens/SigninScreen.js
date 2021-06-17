import React from 'react';
import  { useState,useEffect, } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { signin } from '../Redux/Actions/AuthActions';
export default function SigninScreen(props) {
        const userSignin = useSelector((state) => state.userSignin)
        const {userInfo}= userSignin ;
        const {error}= userSignin ;
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const redirect =props.location.search ? props.location.search.split('=')[1] : '/home';
        const redirect1 =props.location.search ? props.location.search.split('=')[1] : '/home';
        const dispatch = useDispatch();
 
 const submitHandler = (e) => {
     e.preventDefault();
     dispatch(signin(email,password));
   };


   useEffect(() => {
     if(userInfo){
       

      props.history.push(redirect1);}
            },[props.history,redirect,redirect1,userInfo]
            );
    return (
                
    <div>
    <div>
    {userInfo ?(<Link to="#">{userInfo.name}</Link>):(<Link to="/signin"></Link>)}
    </div>
    <form className="form-signin" onSubmit={submitHandler} >
    <ul className="form-container-signin">
    <li>
        <h2>Sign-In</h2>
    </li>
    <li>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
    </input>
    </li>
    <li>
<label htmlFor="password">Password</label>
<input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
</input>
{ error &&
    <h3 className="error"> { "email or password is incorrect" } </h3> }
</li>
<li>
<button type="submit" className="button primary">Signin</button>
</li>

<li>
<Link to='/register' className="button secondary text-center" >Create account</Link>
</li>
</ul>
</form>
  </div>
    );
}

