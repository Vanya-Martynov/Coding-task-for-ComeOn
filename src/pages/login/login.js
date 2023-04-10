import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { login } from "../../actions/auth";

function Login() {
    let navigate = useNavigate();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
  
    const { isLoggedIn } = useSelector(state => state.AuthReducer);
  
    const dispatch = useDispatch();
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();

      dispatch(login(username, password))
          .then(() => {
            navigate("/home");
          }).catch(err => {
            setShowError(true)
            console.error(err);
          });
      
    };
  
    if (isLoggedIn) {
      return <Navigate to="/home" />;
    }

    return (
        <>
        <div className="ui one column center aligned page grid">
            <div className="column twelve wide">
                <img src={ logo } alt="logo" />
            </div>
        </div>
        <div className="main container">
            <div className="login">
                <div className="ui grid centered">
                    <form onSubmit={handleLogin}>
                        <div className="fields">
                            <div className="required field">
                                <div className="ui icon input">
                                    <input type="text" onChange={onChangeUsername} value={ username } name="username" placeholder="Username"/>
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="required field">
                                <div className="ui icon input">
                                    <input type="password" onChange={onChangePassword} value={ password } name="password" placeholder="Password"/>
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            { showError ? <div className="required field red">
                                <div className="ui icon input">
                                    Something went wrong
                                </div>
                            </div> : <></> }
                            <div className="field">
                                <div className="ui icon input">
                                    <input type="submit" value="Login"/>
                                    <i className="right chevron icon"></i>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        
    );
  }
  
  export default Login;