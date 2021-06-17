import React from 'react';
import { Nav, Navbar, NavDropdown,Container } from 'react-bootstrap'
import { FetchJobs,FetchJobsIndeed } from '../Redux/Actions/JobActions';
import { toggle, } from '../Redux/Actions/togglenav';

import  { useState,useEffect, } from 'react'
import { Link } from 'react-router-dom';

import {useDispatch,useSelector} from 'react-redux'
import NavBarcompo from "../Componenent/NavBar"
import Job from '../Componenent/Job';

import  './HomePage.css'
import JobIndeed from '../Componenent/JobIndeed';
  
function HomePage(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo}= userSignin ;
    const {error}= userSignin ;
    const redirect1 =props.location.search ? props.location.search.split('=')[1] : '/signin';

    const list = useSelector((state) => state.listJobsFetch)
    const {JobList}= list ;

    const listjobindeed = useSelector((state) => state.listjobindeed)
    const {JobIndeedList}= listjobindeed ;


    const dispatch = useDispatch();
    useEffect(() => {
        if(!userInfo){ props.history.push(redirect1);}
        console.log("hello");
        console.log(JobList);
dispatch(FetchJobs());

dispatch(FetchJobsIndeed());

dispatch(toggle("true"));
               },[dispatch,]
               );
              
     
    return (
        <Container className="my-4">

        { (JobList&&userInfo) ?            
(JobList.data.map(job=>{
            return (<div key={job.id}>  <Job key={job.id} job={job} role={userInfo.data.roles[0]}></Job>
            </div>
            )
        })):<div>Loading...</div>}




{ (JobIndeedList&&userInfo) ?            
(JobIndeedList.data.map(job=>{
            return (<div key={job.id}>  <JobIndeed key={job.id} job={job} role={userInfo.data.roles[0]}></JobIndeed>
            </div>
            )
        })):<div>Loading...</div>}

    </Container>
    


        
   

    );
}

export default HomePage;