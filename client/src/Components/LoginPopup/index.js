import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IoMdClose } from "react-icons/io";
import './index.css';

const LoginPopup = ({ isLogin, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        else if (name === 'email'){
            setEmail(value)
        }
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regex.test(email)) {
          setEmailError('Invalid email address');
        } else {
          setEmailError('');
        }
      };
    
      const validatePassword = (password) => {
        if (password.length < 8) {
          setPasswordError('Password must be at least 8 characters');
        } else {
          setPasswordError('');
        }
      };
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        // if (isLogin) {
        //     
        // } else {
        //     
        // }

        // Based on the authentication/registration result,
        // either close the popup or display a success/error message.

        // Call the onClose prop to close the popup
        setEmailError('');
        setPasswordError('');
        onClose();
    };

    return (
        <div>
            <Popup open={true} onClose={onClose} modal nested>
                {isLogin ? (
                    <div className="login-form popup-form-container">
                        <div className='close-button'>
                            <Button variant="text" onClick={() => onClose(false)}>
                                <IoMdClose size={20} color='black' />
                            </Button>
                        </div>
                        <h5>Login in to CloudCode Developers</h5>
                        <TextField
                            label="Username"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={handleInputChange}
                            margin="normal"
                            fullWidth
                        />
                        <Button variant="contained" type="submit" onClick={handleSubmit}>
                            Login
                        </Button>
                        <div className='signup-hint-msg'>
                            <p>Don't have an account? <span className='signup-span'>Sign up</span></p>
                        </div>
                    </div>
                ) : (
                    <div className="signup-form popup-form-container">
                        <div className='close-button'>
                            <Button variant="text" onClick={() => onClose(false)}>
                                <IoMdClose size={20} color='black' />
                            </Button>
                        </div>
                        <h4>Create an account</h4>
                        <TextField
                            label="Username"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleInputChange}
                            onBlur={() => validateEmail(email)}
                            margin="normal"
                            fullWidth
                        />
                        {emailError && <p className="error">{emailError}</p>}
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={handleInputChange}
                            onBlur={() => validatePassword(password)}
                            margin="normal"
                            fullWidth
                        />
                        {passwordError && <p className="error">{passwordError}</p>}
                        <Button variant="contained" type="submit" onClick={handleSubmit}>
                            Sign Up
                        </Button>
                        <div className='signup-hint-msg'>
                            <p>Already have an account? <span className='signup-span'>Login</span></p>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default LoginPopup;
