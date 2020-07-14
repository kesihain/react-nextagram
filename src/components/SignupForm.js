import React,{useState} from 'react';
import {Form,Label,Input} from 'reactstrap';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignupForm({setIsLogin,toggleModal}){
    
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = event =>{
        event.preventDefault();
        // console.log(event.target.username.value)
        if (username.length>5&&email.length>5&&password.length>5){
            console.log(username);
            console.log(email);
            console.log(password);
            axios({
                method: 'POST',
                url: 'https://insta.nextacademy.com/api/v1/users/',
                data: {
                    username: username,
                    email: email,
                    password: password
            }
            })
            .then(response => {
                console.log(response)
                toast(`Welcome to Nextagram ${username}!!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                toggleModal();
            })
            .catch(error => {
                console.error(error.response) // so that we know what went wrong if the request failed
                toast.error('Unable to login!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
        }
    }
    return(
        <div>
            <Form onSubmit={e=>handleSubmit(e)}>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="johnsmith69" onChange={e=>setUsername(e.target.value)} value={username}></Input>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="johnsmith69@provider.com" onChange={e=>setEmail(e.target.value)} value={email}></Input>
                <Label for= "password">Password</Label>
                <Input type="text" name="password" id="password" placeholder="*****" onChange={e=>setPassword(e.target.value)} value={password}></Input>
                <small>Already a member ?<span onClick={()=>setIsLogin(true)}>Login</span></small>
                <Input type="submit" value="Submit">Sign Up</Input>
            </Form>            
        </div>
    )
}
export default SignupForm