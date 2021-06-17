import React from 'react';
import { Card,Row,Col,Button } from 'react-bootstrap'
import{Link} from 'react-dom'
function JobIndeed({job,role}) {
  
    return (
        <Card>
        <Card.Body>
            <div >
          <Card.Title>{job.title}</Card.Title>
          
          <Row xs="auto">
        <Col>
          </Col>
          <Col>
          <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
          </Col>
    
          </Row>
          <Card.Text>{job.description}</Card.Text>
        <Card.Footer>
      
     
    </Card.Footer>
    {role=="SEEKER"&& (<Button    href={"https://www.indeed.com"+job.link_url}     
            variant="primary"
          >
            Apply
          </Button>)}
          
          </div>
        </Card.Body>
      </Card>
    );
}

export default JobIndeed;