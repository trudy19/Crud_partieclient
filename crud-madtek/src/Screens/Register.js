import React from 'react';
import  { useState,useEffect, } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { toggle } from '../Redux/Actions/togglenav';

import './Register.css' ;




function Register(props) {

   

return (
<div class="w3d23">

    <a  href="/signin">
        <div className ="w4d1" >
                    <span className="w4d12" >
                    ALREADY USER ? 
                     </span>
       
                    <div className="w4d13" >
                        <div className="w4d131" >LOGIN</div>
                     </div>
        </div>
    </a>
    <a ClassName="adecoration"href="/register/recruiter">
        <button class="w3d140" >
            <img class="w3d32" src="./recruiter.webp">
            </img>
                <div className="w3d33">
                    Create Recruiter account
                </div>
        </button>
    </a>
    <a  href="/register/seeker">
        <button className="w3d40" >
            <img class ="w3d32"src="./seeker.webp"></img>
                <div className="w3d33">
                    Create SEEKER account
                </div>
        </button>
    </a>
</div>
    );
}

export default Register;