import React from 'react';
import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';


interface LoginData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [loginData, setLoginData] = useState<LoginData>({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, username: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, password: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("ggg", process.env.REACT_APP_LOGIN_BASE_URL)

    try {
      const response = await fetch(`${process.env.REACT_APP_LOGIN_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        setErrorMessage("");
        console.log('Login successful');
        navigate('/dashborad');
      } else {
        setErrorMessage("Username and Password didn't Match. Try Again");
        console.log('Login failed');
      }
    } catch (error) {
      console.error('API call failed', error);
    }
  };

  return (
    <div className='continer'>
      <div className='title'>
        <h1>Social Media Sentiment Analysis</h1>
      </div>
      <div className='cardContainer'>
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
            <form onSubmit={handleSubmit}>
              <Typography color="rgb(0, 42, 255)" variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              {errorMessage && <div className='errorContainer'>
                <p className='errorText'>Username and Password didn't Match. Try Again</p>
              </div>}
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={loginData.username}
                onChange={handleUsernameChange}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={loginData.password}
                onChange={handlePasswordChange}
              />
              <div className="submitButton">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!loginData.username || !loginData.password}
                  fullWidth
                  data-testid={"Login"}
                >
                  Login
                </Button>
              </div>
              <div className='newUser'>
                <Button color="secondary" onClick={event => window.location.href = '/signin'} >New User?</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

