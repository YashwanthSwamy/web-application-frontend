import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css"

interface Props { }

interface SigninData {
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
    password: string;
}

const SignIn: React.FC<Props> = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [signinData, setLoginData] = useState<SigninData>(
        {
            email: '',
            firstName: '',
            lastName: '',
            userId: '',
            password: ''
        });

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...signinData, email: event.target.value });
    };

    const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...signinData, firstName: event.target.value });
    };

    const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...signinData, lastName: event.target.value });
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...signinData, userId: event.target.value });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...signinData, password: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Submit", signinData)
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_CREATE_ACCOUNT_BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signinData),
            });

            console.log("response", response);

            if (response.ok) {
                console.log('Created successful');
                navigate('/');
                setErrorMessage("")
            }
            else if (response.status === 409) {
                console.log('Creation failed');
                setErrorMessage("Username already exists!!")
            }
            else {
                console.log('Creation failed');
                setErrorMessage("Create Account Failed Please Come Back later!!")
            }
        } catch (error) {
            console.error('API call failed', error);
            setErrorMessage("Create Account Failed Please Come Back later!!")
        }
    };

    return (
        <div className='continer'>
            <div>
                <div className='title'>
                    <h1>Social Media Sentiment Analysis</h1>
                </div>
            </div>
            <div>
                <Card variant="outlined" sx={{
                    maxWidth: 400,
                    margin: 'auto',
                    boxShadow: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <CardContent>
                        <Typography color="rgb(0, 42, 255)" variant="h4" align="center" gutterBottom>
                            Sign In
                        </Typography>
                        {errorMessage && <div className='errorContainer'>
                            <p className='errorText'>{errorMessage}</p>
                        </div>}
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={signinData.firstName}
                                onChange={handleFirstnameChange}
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={signinData.lastName}
                                onChange={handleLastnameChange}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={signinData.email}
                                onChange={handleEmailChange}
                            />
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={signinData.userId}
                                onChange={handleUsernameChange}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="password"
                                value={signinData.password}
                                onChange={handlePasswordChange}
                            />
                            <div className="submitButton">
                                <Button variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={!signinData.email ||
                                        !signinData.password ||
                                        !signinData.firstName ||
                                        !signinData.lastName ||
                                        !signinData.userId}
                                    fullWidth>
                                    Sign In
                                </Button>
                            </div>
                            <div>
                                <div className='existingUser'>
                                    <Button color="secondary" onClick={event => window.location.href = '/'} >Existing User?</Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SignIn;
