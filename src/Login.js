import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //Logged in
                history.push('/');
            })
            .catch(event => alert(event.message));
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //create a user and log in
                history.push('/');
            })
            .catch(event => alert(event.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="data:image/png;base64,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"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input onChange={event => setEmail(event.target.value)} value={email} type="email" />
                    <h5>Password</h5>
                    <input onChange={event => setPassword(event.target.value)} value={password} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
