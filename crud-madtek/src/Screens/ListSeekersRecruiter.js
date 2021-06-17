import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'; 
import { FetchListSeekersRecruiter,DownloadResume } from '../Redux/Actions/RecruiterActions';
import { Card,Row,Col,Button } from 'react-bootstrap'
import Axios from "axios";
function ListSeekersRecruiter(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo}= userSignin ;
    
  //  export const signin = (email, password) => async (dispatch) => {

  
    const {id} =useParams();
    const listseeker=useSelector(state=>state.listseeker);
    const {listseekerrecruiter}=listseeker ;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(FetchListSeekersRecruiter(id))
console.log(listseekerrecruiter)
    },[dispatch]

    );
    const downloadfile=(path,name)=>{
        dispatch(DownloadResume(path,name))
        console.log(path);

    }

    return (
        <div>

            {listseekerrecruiter ?(
                listseekerrecruiter.data.map(seeker=>{
                    return(
             <Card key={seeker.id}>
          <Card.Body>
            <div >
                 <Card.Title>{seeker.username}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">{seeker.email}</Card.Subtitle>
                 <Button onClick={()=>downloadfile(seeker.path_resume,seeker.username)}>download resume</Button>

            </div>
        </Card.Body>
        
      </Card>);
      })):
      <div>mahich</div>
      }
        </div>
    );
}

export default ListSeekersRecruiter;