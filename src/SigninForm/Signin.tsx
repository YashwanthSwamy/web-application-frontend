import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./Signin.css"

interface Props { }

const SignIn: React.FC<Props> = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
    };

    return (
        <div className='continer'>
            <div>
                <div className='title'>
                    <h1>Social Media Sentiment Analyisis</h1>
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
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="submitButton">
                                <Button variant="contained"
                                    color="primary"
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
