import logo from './logo.svg';

import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import SigninScreen from './Screens/SigninScreen';
import HomeRecruiter from './Screens/HomeRecruiter';

import NavBarcompo from "./Componenent/NavBar"
import JobPost from './Screens/JobPost'
import HomePage from './Screens/HomePage';
import JobApplyPage from './Screens/JobApplyPage';
import JobsRecruiter from './Screens/JobsRecruiter';
import JobEditRecruiter from './Screens/JobEditRecruiter';
import JobsSeeker from './Screens/JobsSeeker';
import Register from './Screens/Register';
import {useDispatch,useSelector} from 'react-redux'
import  { useState,useEffect, } from 'react'

import { toggle } from './Redux/Actions/togglenav';
import RegisterRecruiter from './Screens/RegisterRecruiter';
import RegisterSeeker from './Screens/RegisterSeeker';
import ListSeekersRecruiter from './Screens/ListSeekersRecruiter';


export default  function App(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const {userInfo}= userSignin ;

  

  return (

    <BrowserRouter>
  

  <Switch>
  <Route exact path="/signin" component={LoginContainer}/>

    <Route  path="/register" component={SignupContainer}/>
    <Route path="/" component={DefaultContainer}/>
    </Switch>
    </BrowserRouter>
  );
}


const DefaultContainer = () => (
  <div className="grid-container">
    <header>
      <NavBarcompo />
    </header>
    <main >
    <Route path="/"  component={HomePage} exact />

    <Route path="/recruiter"  component={HomeRecruiter} exact />
    <Route path ="/recruiter/job/post" component={JobPost} exact></Route>
    <Route path ="/Home" component={HomePage} exact></Route>
    <Route path ="/recruiter/jobs" component={JobsRecruiter} exact></Route>
    <Route path ="/seeker/apply/:id" component={JobApplyPage} exact></Route>
    <Route path ="/recruiter/job/edit/:id" component={JobEditRecruiter} exact></Route>
    <Route path ="/seeker/job/" component={JobsSeeker} exact></Route>
    <Route path ="/recruiter/seeker/get/:id" component={ListSeekersRecruiter} exact></Route>



    </main>
    </div>
)


const SignupContainer = () => (
  <div>
   <Route path ="/register/" component={Register} exact></Route>
   <Route path ="/register/recruiter/" component={RegisterRecruiter} exact></Route>
   <Route path ="/register/seeker/" component={RegisterSeeker} exact></Route>

   
   </div>
)


const LoginContainer = () => (
  <div>
       <Route path="/signin"  component={SigninScreen} exact />


   
   </div>
)
