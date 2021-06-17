import React from 'react';
import  { useState,useEffect, } from 'react'
import {FetchJobSeeker} from'../Redux/Actions/SeekerActions'
import {useDispatch,useSelector} from 'react-redux'
import { Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Job from '../Componenent/Job';

function JobsSeeker(props) {
    const seekerfetchjob=useSelector(state=>state.seekerfetchjob);
    const {listjobsseeker}=seekerfetchjob ;

    const dispatch=useDispatch();
    useEffect(()=>{
        console.log(listjobsseeker)
        dispatch(FetchJobSeeker())
    
    },[dispatch,]);


    return (
        <div>
        {listjobsseeker?(listjobsseeker.data.map(job=>{

           return( <div key={job.id}>
                 <Job    job={job} role="RECRUITER" ></Job>
               
                 
                </div>
                 )
        })):(<div>
loading        </div>)}</div>
    );
}

export default JobsSeeker;