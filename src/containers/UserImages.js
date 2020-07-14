import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Col,Row} from 'reactstrap';
import LoadingIndicator from "../components/LoadingIndicator";
import Image from 'react-graceful-image'
function UserImages(props) {
  const [isLoading,setIsLoading] = useState(true)
  const [images,setImages] = useState([])
  useEffect(() => {
      // performing a GET request
      axios.get(`https://insta.nextacademy.com/api/v1/images/?userId=${props.userId}`)
      .then(result => {
        // If successful, we do stuffs with 'result'
        setImages(result.data)
        setIsLoading(false)
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
    }, [])
    if (isLoading){
      return <LoadingIndicator></LoadingIndicator>
    }
  return (
    <div className="ml-5">
      <Row>
          {images.map((image, index)=>(
            <Col sm="4" className='p-3 p-sm-0' key={`${props.userId}-images${index}`} >
              <Image src={image} alt="user images" style={{objectFit:'cover'}} width="100%" height="250" className='p-1 mx-auto image-fluid'placeholderColor="#0083FE"/>
            </Col>
          ))}
      </Row>

    </div>
  )
}

export default UserImages