import React from 'react';
import { Nav, Navbar, NavDropdown,Container } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'

import { logout } from '../Redux/Actions/AuthActions';

function NavBarcompo(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo}= userSignin ;
    const {error}= userSignin ;
    const dispatch = useDispatch();

    const LogoutClick = () => {
        dispatch(logout());
      };
    return (
        
        <Navbar  bg="light" expand="lg" >
                    {userInfo ?(

        <Container className="navbarcontainer" >
            
          <Navbar.Brand href="/home">Madtek</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            
           {userInfo.data&& (
           
           <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>

              {(userInfo.data.roles.includes("RECRUITER"))?(<Nav.Link href="/recruiter/job/post">Post a JOB </Nav.Link>):(<div></div>)}
              {(userInfo.data.roles.includes("SEEKER"))?(<Nav.Link href="/seeker/job/">My job offers </Nav.Link>):(<div></div>)}




              <NavDropdown  style={{"margin-left":"40vw"}} title={userInfo.data.username} id="basic-nav-dropdown">
                {(userInfo.data.roles.includes("RECRUITER")
                )?(<NavDropdown.Item href="/recruiter/jobs">Posted Job </NavDropdown.Item>):(<div></div>)}

                <NavDropdown.Divider />
                <NavDropdown.Item href="/signin" onClick={LogoutClick} >Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            
            
            )}
          </Navbar.Collapse>
        </Container>):
        (<Container>
  
  <Navbar.Brand href="/home">MADTEK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>

     
            </Nav>
          </Navbar.Collapse>
        </Container>)}
      </Navbar>
        
    );
}

export default NavBarcompo;