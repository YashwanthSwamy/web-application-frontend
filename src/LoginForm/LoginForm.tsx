import React from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import "./LoginForm.css"

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

type LoginState = {
  username: string;
  password: string;
};

export default class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    username: '',
    password: '',
  };

  handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    this.props.onLogin(username, password);
  };

  render() {
    return (
      <div className='continer'>
        <div className='title'>
          <h1>Social Media Sentiment Analyisis</h1>
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
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <div className="submitButton">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
