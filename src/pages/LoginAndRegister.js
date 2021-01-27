import React, { useState } from "react";
import "./LoginAndRegister.css";
import { TextField, Button } from "@material-ui/core";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [formType, setFormType] = useState(false); // False for sign in form else register form

    const errorsHandler = (e) => {
        if (username === "") {
            setErrorUsername("Username must be filled in");
            e.preventDefault();
        }

        if (password === "") {
            setErrorPassword("Password must be filled in");
            e.preventDefault();
        }
    };

    const usernameInputHandler = (e) => {
        setUsername(e.target.value);
        setErrorUsername("");
    };

    const passwordInputHandler = (e) => {
        setPassword(e.target.value);
        setErrorPassword("");
    };

    const switchFormHandler = () => {
        setFormType(!formType);
    };

    return (
        <div className="login">
            {formType === false ? (
                <form
                    onSubmit={errorsHandler}
                    action="/workspace"
                    className="login__form"
                    autoComplete="off">
                    <img src="/images/notes.png" alt="ourteam" />
                    <p className="login__formQuote">
                        Notes for your better life
                    </p>
                    <TextField
                        id="standard-basic"
                        label="Username"
                        value={username}
                        onChange={usernameInputHandler}
                    />
                    <p className="login__formErrorMessage">{errorUsername}</p>
                    <TextField
                        id="standard-basic"
                        label="Password"
                        value={password}
                        onChange={passwordInputHandler}
                    />
                    <p className="login__formErrorMessage">{errorPassword}</p>
                    <Button type="submit" variant="contained">
                        Sign In
                    </Button>
                    <span onClick={switchFormHandler}>Register here</span>
                </form>
            ) : (
                <form
                    onSubmit={errorsHandler}
                    action=""
                    className="register__form"
                    autoComplete="off">
                    <img src="/images/notes.png" alt="ourteam" />
                    <p className="register__formQuote">Get Started</p>
                    <TextField
                        value=""
                        required
                        id="standard-basic"
                        label="Username"
                    />
                    <TextField
                        value=""
                        required
                        id="standard-basic"
                        label="Password"
                    />
                    <TextField
                        value=""
                        required
                        id="standard-basic"
                        label="Email"
                    />
                    <Button type="submit" color="primary" variant="contained">
                        Register
                    </Button>
                    <span onClick={switchFormHandler}>Back to sign in</span>
                </form>
            )}
        </div>
    );
}

export default Login;
