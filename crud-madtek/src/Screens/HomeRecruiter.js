import React from 'react';
import { Nav, Navbar, NavDropdown,Container } from 'react-bootstrap'

import {useDispatch,useSelector} from 'react-redux'
import NavBarcompo from "../Componenent/NavBar"
  
function HomeRecruiter(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo}= userSignin ;
    const {error}= userSignin ;


    return (

       <div>

       </div>

        


                

    );
}

export default HomeRecruiter;