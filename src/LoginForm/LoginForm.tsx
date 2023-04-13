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


interface LoginData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [loginData, setLoginData] = useState<LoginData>({ username: '', password: '' });

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, username: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, password: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send API call with loginData
    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
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

