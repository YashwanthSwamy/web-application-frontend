import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashborad from './Dashboard/Dashboard';
import LoginForm from './LoginForm/LoginForm';
import SignIn from './SigninForm/Signin';

function App() {
    return (
        <div className='appBody'>
            <React.Fragment>
                <meta name={"viewport"} content={"width=device-widt, initial scale=0.1"}></meta>
                <BrowserRouter>
                    <React.Fragment>
                        <Routes>
                            <Route path="/" Component={LoginForm} />
                            <Route path="/signin" Component={SignIn} />
                            <Route path="/dashborad" Component={Dashborad} />
                        </Routes>
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        </div>
    );
}

export default App;
