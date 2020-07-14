import React,{useState} from 'react';
import {Navbar as NavBar, NavLink,NavbarBrand,NavItem,Button,Modal,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
const Navbar = ({loggedIn,setLoggedIn})=> {
    const [isLogin,setIsLogin] = useState(true);
    const modalContent=()=>{
        if(isLogin){
            return <LoginForm setIsLogin={setIsLogin} toggleModal={toggleModal}></LoginForm>
        }else{
            return <SignupForm setIsLogin={setIsLogin} toggleModal={toggleModal}></SignupForm>
        }
    }
    const handleLogout=()=>{
        localStorage.removeItem('jwt');
        window.location.assign("/")
    }
    
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);    
    return(
        <div>
            <NavBar color="dark" dark expand="md" fixed="top">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavLink tag={Link} to="/users/1">My Page</NavLink>
                <div className="ml-auto">
                    {loggedIn?
                        <div className="d-flex">
                            <NavLink tag={Link} to="/profile">{localStorage.getItem('currentUserName')}</NavLink>
                            <Button outline color="info" className="navbar-right" onClick={handleLogout}>Logout</Button>
                        </div>
                    :
                        <Button outline color="info" className="navbar-right" onClick={toggleModal}>Login</Button>
                    }
                </div>
            </NavBar>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                {modalContent()}
            </Modal>
        </div>

    )
}
export default Navbar