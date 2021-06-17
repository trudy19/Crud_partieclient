import React, { useEffect,useState, } from 'react';
import { useHistory,useParams,useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'

import { EditJobRecruiter } from '../Redux/Actions/RecruiterActions';

import { Form,Row,Button,Col,Container  } from 'react-bootstrap'


function JobEditRecruiter(props) {
    const redirect =props.location.search ? props.location.search.split('=')[1] : '/recruiter/job/post';

    const { id } = useParams()
   
   const [ index, setIndex ] = useState()

    const recruiterfetchjob=useSelector(state=>state.recruiterfetchjob);
    const {listjobsrecruiter}=recruiterfetchjob;
    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

    const recruitereditjob=useSelector(state=>state.recruitereditjob);
    const {success}=recruitereditjob;


    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
          ...errors,
          [field]: null
        })
      }
      


      const dispatch = useDispatch();

      const submitHandler = (e) => {
        e.preventDefault();
       //dispatch(PostJob({title,location,type,skill_required,seniority_level}));
    console.log(form)
       //dispatch(PostJob(title))
       const newErrors = findFormErrors()
    console.log(newErrors)
       // Conditional logic:
       if ( Object.keys(newErrors).length > 0 ) {
         // We got errors!
         setErrors(newErrors)
       } else {
        dispatch(EditJobRecruiter({"id":id,"title":form.title,"description":form.description,"location":form.location,"type":form.type,"skill_required":form.skill_required,"seniority_level":form.seniority_level}));
    
         // No errors! Put any logic here for the form submission!
         
       }
    };


    const findFormErrors = () => {
        
        const { title,description, location, type, skill_required ,seniority_level} = form
        const newErrors = {}
        // location errors
        if ( !location || location === '' ) newErrors.location = 'cannot be blank!'
        else if ( location.length > 30 ) newErrors.location = 'write a location'
      
      //description error
        if ( !description || description === '' ) newErrors.description = 'cannot be blank!'
        else if ( description.length > 500 ) newErrors.description = 'write a description'
        //title error
        if ( !title || title === '' ) newErrors.title = 'select a title!'
        //skill error
        if ( !skill_required || skill_required === '' ) newErrors.skill_required = 'select a skill!'
        //type error
        if ( !type || type === '' ) newErrors.type = 'select a type!'
        //seniority error
        if ( !seniority_level || seniority_level === '' ) newErrors.seniority_level = 'select a seniority_level!'
      
        return newErrors
      }

      useEffect(()=>{
        if(success)
             {props.history.push(redirect);}
        if(listjobsrecruiter){
          setIndex(listjobsrecruiter.data.findIndex(job=>job.id=id))
        }
      },[listjobsrecruiter,dispatch,success]);

    return (
    <div>

  {( listjobsrecruiter !=null&&index!=null) ?(
      
<Container className="containerpostjob">
<Form  onSubmit={submitHandler} className="formgrid"    >

    
 
    <Form.Group className="mb-3" controlId="formGridjobpost1">
    <Form.Label  >Title</Form.Label>
    <Form.Control  as="select"  onChange={ e => setField('title', e.target.value) }   isInvalid={ !!errors.title } >
                            <option value=''>Default select</option>
                            <option value="0">Sales Representative</option>
                            <option value={1}>Software Developer</option>
                            <option value={2}>Financial Analyst</option>
     </Form.Control>
     <Form.Control.Feedback type='invalid'>
     { errors.title }
    </Form.Control.Feedback>
      </Form.Group>




    <Form.Group className="mb-3" controlId="validationCustom01">
    <Form.Label>Location</Form.Label>
    <Form.Control   
            type="text"   onChange={ e => setField('location', e.target.value) } isInvalid={ !!errors.location } placeholder="location" />
    <Form.Control.Feedback type='invalid'> { errors.location }</Form.Control.Feedback>
    </Form.Group>
  

  <Form.Group className="mb-3" controlId="formGridjobpost3">
    <Form.Label>Type</Form.Label>
    <Form.Control  as="select" onChange={ e => setField('type', e.target.value) } isInvalid={!!errors.type}>
                           <option value=''>Default select</option>
                            <option value={0}>full-time</option>
                            <option value={1}>part-time</option>
                            <option value={2}>contract</option>
                            <option value={2}>Voluntary</option>
    </Form.Control>
    <Form.Control.Feedback type='invalid'>{errors.type} </Form.Control.Feedback>

    </Form.Group>


  <Form.Group className="mb-3" controlId="formGridjobpost4">
    <Form.Label>Skill Required</Form.Label>
    <Form.Control as="select" onChange={ e => setField('skill_required', e.target.value) }isInvalid={!!errors.skill_required}>
                            <option value=''>Default select</option>
                            <option value={0}>Software</option>
                            <option value={1}>Finance</option>
                            <option value={2}>Stock Market</option>
                            <option value={2}>Salesforce</option>
                            <option value={2}>SEO</option>
                            <option value={2}>Growth Hacking</option>
    </Form.Control>
    <Form.Control.Feedback type='invalid'> {errors.skill_required}</Form.Control.Feedback>

    </Form.Group>


    <Form.Group className="mb-3" controlId="formGridjobpost5">
    <Form.Label>Seniority Level</Form.Label>
    <Form.Control as="select"  onChange={ e => setField('seniority_level', e.target.value) }isInvalid={!!errors.seniority_level}>
                            <option value=''>Default select</option>
                            <option value={0}>Junior</option>
                            <option value={1}>Senior</option>
                            <option value={2}>Entry</option>
                            <option value={2}>Associate</option>
                            
  </Form.Control>
  <Form.Control.Feedback type='invalid'> {errors.seniority_level}</Form.Control.Feedback>

  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formGridjobpost5">
    <Form.Label>Description</Form.Label>
    <Form.Control  type="text" onChange={ e => setField('description', e.target.value) }isInvalid={!!errors.description}>
              
                            
  </Form.Control>
  <Form.Control.Feedback type='invalid'> {errors.description}</Form.Control.Feedback>

  </Form.Group>



  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>):<div></div>}</div>

    );
}

export default JobEditRecruiter;