import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMsg;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorMsg = <p className='text-danger'>Error: {error.message}</p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent');
        }
        else {
            toast('Please Enter Your Email Address');
        }
    }

    const navigateToRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <br /><br />
            <div className='from-container mx-auto'>
                <h2 className='mb-5 mt-5'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorMsg}
                <p className='mt-5'>New to here? <Link to="/register" className='text-warning pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
                <p>Forget Password? <button className='btn btn-link text-warning pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
