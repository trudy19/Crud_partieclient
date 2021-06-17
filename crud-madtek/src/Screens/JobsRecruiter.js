import React from 'react';

import  { useState,useEffect, } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Job from '../Componenent/Job';
import { FetchJobRecruiter,DeleteJobRecruiter } from '../Redux/Actions/RecruiterActions';
import { Button ,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./JobsRecruiter.css"


export default function JobsRecruiter(props) {

const recruiterfetchjob=useSelector(state=>state.recruiterfetchjob);

const   {listjobsrecruiter}=recruiterfetchjob;
const{loading}=recruiterfetchjob;

const recruiterdeletejob=useSelector(state=>state.recruiterdeletejob);

const{success}=recruiterdeletejob;
 

const dispatch = useDispatch();
const deleted = (idofjob)=> {
    dispatch(DeleteJobRecruiter(idofjob))}
useEffect(()=>{
    console.log(listjobsrecruiter)
    dispatch(FetchJobRecruiter())

},[dispatch,success]);

    return (<Container>
        {listjobsrecruiter?(listjobsrecruiter.data.map(job=>{

           return( <div key={job.id}>
                 <Job  job={job} role="RECRUITER" ></Job>
          
            <div className="buttons">
                <div className="button-edit">
                 <Button variant="danger" onClick={() => deleted(job.id)} >
                     Delete
                </Button > 

                <Link  to= {"/recruiter/job/edit/"+job.id}>
                  <Button  variant="info">Edit</Button>
                </Link> 
                </div>
                <Link  to= {"/recruiter/seeker/get/"+job.id}>
                  <Button   variant="info">View all Candidatures</Button>
                </Link> 
            </div>
           </div>
                 )
        })):(<div>
loading        </div>)}</Container>
    );
}

///href={"/recruiter/job/edit/"+job.id}