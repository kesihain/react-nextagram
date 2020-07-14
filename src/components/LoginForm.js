import React,{useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginForm({setIsLogin,toggleModal}){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        if(username.length>5&&password.length>5){
            axios({
                method: 'post',
                url: 'https://insta.nextacademy.com/api/v1/login',
                data: {
                    username: username,
                    password: password
                }
            }).then(result => {
                toast(`You are now logged in ${username}!!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                localStorage.setItem('jwt', result.data.auth_token);
                localStorage.setItem('currentUserID',result.data.user.id)
                localStorage.setItem('currentUserName',result.data.user.username)
                toggleModal();                    
                console.log(result.data);
                window.location.reload(false)
            })
        }
    }
    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="johnsmith69" onChange={(e)=>setUsername(e.target.value)} value={username}></Input>
                <Label for= "password">Password</Label>
                <Input type="text" name="password" id="password" placeholder="*****" onChange={(e)=>setPassword(e.target.value)} value={password}></Input>
                <small>New here ?<span onClick={()=>setIsLogin(false)}>Sign Up</span></small>
                <Input type="submit" value="Submit">Login</Input>
            </Form>
        </div>
    )
}

export default LoginForm