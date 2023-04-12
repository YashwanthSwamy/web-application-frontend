import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashborad from './Dashboard/Dashboard';
import LoginForm from './LoginForm/LoginForm';

function App() {
    return(
    <React.Fragment>
        <meta name={"viewport"} content={"width=device-widt, initial scale=0.1"}></meta>
                <BrowserRouter>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/" component={LoginForm} />
                            <Route path="/dashborad" component={Dashborad} />
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
    </React.Fragment>
    );
}

export default App;
