import React from "react";
import "./login.css" 

import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <div>|
            <div class="center">
            <form class="form" action="" method="post">
                <img class="logo" src="./Images/logo.png" alt="Logo"/><br/>
                <h3>Please Enter Valid Credentials</h3><br/>
                <div class="text_feild">
                        <input id="user_name" type="email" name="username" placeholder="User Name"/><br/>
                </div>
                <div class="text_feild">
                        <input id="password" type="password" name="password" placeholder="Password"/><br/>   
                </div>
                <div class="forget">Forget Password?</div>
                <input type="submit" class="login_button" value="Login" />
                <div class="signup_link">
                Not a member? <Link to="/register"><a href="#">Register</a></Link>
                </div>
                <div class="signup_link">
                    Employee? <a href="#">Verify Data</a>
                </div>
            </form>

            
        </div>

        </div>
    )
}

export default LoginForm;