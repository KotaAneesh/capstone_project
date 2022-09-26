import React from "react";
import "./register.css"

import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <div>
            <div class="center">
            <form class="form" action="" method="post">
                <h3>Please Enter Required Details</h3><br/>
                <div class="text_feild">
                        <input id="user_name" type="email" name="username" placeholder="User Name"/><br/>
                </div>
                <div class="text_feild">
                        <input id="user_name" type="text" name="fullname" placeholder="Full Name"/><br/>
                </div>
                <div class="text_feild">
                        <select name="role" id="role" className="role_drop_down">
                            <option value="user">User</option>
                            <option value="developer">Developer</option>
                            <option value="admin">Admin</option>
                        </select>
                </div>
                <input type="submit" class="register_button" value="Register" />
                <div class="signup_link">
                Already a member? <Link to="/"><a href="#">Login</a></Link>
                </div>
            </form>
        </div>

        </div>
    )
}

export default RegisterForm;