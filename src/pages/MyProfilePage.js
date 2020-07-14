import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoadingIndicator from "../components/LoadingIndicator";
function MyProfile(props) {
  const [isLoading,setIsLoading] = useState(true)
//   const [images,setImages] = useState([])
  useEffect(() => {
    axios({
        method: 'get',
        url: 'https://insta.nextacademy.com/api/v1/images/me',
        headers:{
            Authorization:`Bearer ${localStorage.getItem('jwt')}`
        }
    }).then(result => {
        console.log(result);
        setIsLoading(false)
    })
    }, [])
    if (isLoading){
      return <LoadingIndicator></LoadingIndicator>
    }
    return (
        <div>
            {/* <h1>{user.username}</h1>
            <UserImages userId={id}></UserImages> */}
        </div>
  )
}

export default MyProfile