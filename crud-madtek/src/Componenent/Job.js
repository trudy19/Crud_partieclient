import React from 'react';
import { Card,Row,Col,Button } from 'react-bootstrap'
import{Link} from 'react-dom'
function Job({job,role}) {
  
    return (
        <Card>
        <Card.Body>
            <div >
          <Card.Title>{job.title}</Card.Title>
          
          <Card.Subtitle className="mb-2 text-muted">{job.createdAt}</Card.Subtitle>
          <Row xs="auto">
        <Col>
          <Card.Subtitle className="mb-2 text-muted">{job.seniority_level}</Card.Subtitle>
          </Col>
          <Col>
          <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
          </Col>
          <Col>
          <Card.Subtitle className="mb-2 text-muted">{job.type}</Card.Subtitle>
          </Col>
          </Row>
          <Card.Text>{job.description}</Card.Text>
        <Card.Footer>
      <small className="text-muted">{job.skill_required}</small>
     
    </Card.Footer>
    {role=="SEEKER"&& (<Button    href={"/seeker/apply/"+job.id}     
            variant="primary"
          >
            Apply
          </Button>)}
          
          </div>
        </Card.Body>
      </Card>
    );
}

export default Job;