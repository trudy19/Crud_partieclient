import React, { useEffect,useState } from 'react';
import { useHistory,useParams } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { Form,Card,Row,Col,Button } from 'react-bootstrap'
import { Nav, Navbar, NavDropdown,Container } from 'react-bootstrap'
import { JobApplyAction } from '../Redux/Actions/SeekerActions';
import './JobApplyPage.css'

function JobApplyPage(props) {


  const redirect =props.location.search ? props.location.search.split('=')[1] : '/home';

    const { id } = useParams()

 
    const ListJobsFetch = useSelector((state) => state.listJobsFetch)
    const {JobList}= ListJobsFetch ;
    const {loading}= ListJobsFetch ;
    
    const toggle = useSelector((state) => state.statetoggle)
    const {toggle1}=toggle
    const [index,setIndex]=useState();
    const [file,setFile]=useState();


    const jobApply = useSelector((state) => state.jobApply)
    const {error}=jobApply ;
    const {success}=jobApply ;

 //   const [found,setFound] = useState('');

    //found = JobList.find(job=>job.id=id);



const dispatch = useDispatch();
const submitHandler = (e) => {
  e.preventDefault();
dispatch(JobApplyAction(file,JobList.data[index].id));
}


useEffect(()=>{
  if(success)
        {props.history.push(redirect);}
    if(JobList){
    setIndex(JobList.data.findIndex(job=>job.id=id))}
},[JobList,dispatch,success]);

      return (
       
        <Container > 
          
         {(JobList!=null&&index!=null)?(<div>

            <Card style={{ width: '100%' }}>
        <Card.Body>
            <div >
          <Card.Title>{JobList.data[index].title}</Card.Title>
          
          <Card.Subtitle className="mb-2 text-muted">{JobList.data[index].createdAt}</Card.Subtitle>
          <Row xs="auto">
        <Col>
          <Card.Subtitle className="mb-2 text-muted">{JobList.data[index].seniority_level}</Card.Subtitle>
          </Col>
          <Col>
          <Card.Subtitle className="mb-2 text-muted">{JobList.data[index].location}</Card.Subtitle>
          </Col>
          <Col>
          <Card.Subtitle className="mb-2 text-muted">{JobList.data[index].type}</Card.Subtitle>
          </Col>
          </Row>
          <Card.Text>{JobList.data[index].description}</Card.Text>
        <Card.Footer>
      <small className="text-muted">{JobList.data[index].skill_required}</small>
     


    </Card.Footer>

          </div>
        </Card.Body>
 
      </Card>

         </div>):(<div>loading ...</div>)}
         <Form onSubmit={submitHandler} >
         <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload your resume to finish the application</Form.Label>
    <Form.Control  type="file" required   name="file" onChange={(e)=>setFile(e.target.files)}/>
            <Form.Control.Feedback type="invalid" tooltip>
            </Form.Control.Feedback> 
            <Button variant="primary" type="submit">
    Apply
  </Button>   
  </Form.Group> 

  {error!=null&&( 
  <h3 className="error"> { error } </h3>
            
            ) }   
  </Form> 


         </Container>
    );
}

export default JobApplyPage;

