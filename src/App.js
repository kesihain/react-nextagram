import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import LoadingIndicator from "./components/LoadingIndicator";
import Homepage from './pages/Homepage';
import UserProfilePage from './pages/UserProfilePage';
import {Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import MyProfile from './pages/MyProfilePage';
// Later go back and complete signup verification

function App() {
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [loggedIn,setLoggedIn] = useState(localStorage.getItem('jwt')!=null)
  useEffect(() => {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      // If successful, we do stuffs with 'result'
      // console.log(result.data)
      setUsers(result.data)
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
    <div >
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <ToastContainer></ToastContainer>
      <div className="mt-5 container">
        <Switch>
          <Route path="/users/:id" component={()=><UserProfilePage users={users}></UserProfilePage>}/>
          <Route exact path="/" component={()=><Homepage users={users}></Homepage>}/>
          <Route path="/profile" component={()=><MyProfile></MyProfile>}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
