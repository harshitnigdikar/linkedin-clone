import React from 'react';
import "./Login.css";

function Login() {
    const loginToApp = () => {};
    const register = () => {};
    return (
        <div className="login">
            <img
            src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_logo.svg__1.png?itok=q_lR0Vks"
            alt="" 
            />

            <form>
                <input placeholder="Full name (required)" type="text" />

                <input placeholder="Profile pic URL (optional)" type="text" />

                <input placeholder="Email" type="email" />

                <input placeholder="Password" type="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
            
        </div>
    )
}

export default Login
