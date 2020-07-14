import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import UserImages from '../containers/UserImages'
import axios from 'axios'
const UserProfilePage = (users)=> {
    let {id} = useParams();
    const [user,setUser] = useState({});
    useEffect(() => {
        // performing a GET request
        axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
        .then(result => {
            // If successful, we do stuffs with 'result'
            setUser(result.data)
            
        })
        .catch(error => {
            // If unsuccessful, we notify users what went wrong
            console.log('ERROR: ', error)
        })
    }, [])
    console.log(user)
    return (
        <div>
            <h1>{user.username}</h1>
                <UserImages userId={id}></UserImages>
        </div>
    )
}

export default UserProfilePage