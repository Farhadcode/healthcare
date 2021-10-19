import React from 'react';

import useAuth from '../../hooks/useAuth';
import './Login.css'
import { Button } from 'react-bootstrap';
import './Login.css'
import { useLocation } from 'react-router';


const Login = () => {


    const { logOut, singInUserInGoogle, handleRegistration, isLogin, handleNameChange, handleEmailChange, hanndlePasswordChange, hanndleUpdatePassword, handelLogin, error, handlePasswordReset, setIsLogin } = useAuth();

    const location = useLocation();

    return (





        <div className="fild">
            <div>
                <form onSubmit={handleRegistration} className="mx-5">
                    <h2 className="header"> Please {isLogin ? 'Login' : 'Register'}</h2>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" placeholder="your name" required />
                        </div>
                    </div>}
                    <div className="row mb-3 ">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="valide email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={hanndlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="passwor" required />
                        </div>
                    </div>

                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"> New Password</label>
                        <div className="col-sm-10">
                            <input onBlur={hanndleUpdatePassword} type="password" className="form-control" id="inputPassword3" placeholder="passwor" required />
                        </div>
                    </div>
                    }

                    <div className="login-from">
                        {isLogin ? (
                            <>
                                <button className="inputBtn " onClick={logOut}> Sign In</button>
                                <p> Don't have an account ? <span onClick={() => setIsLogin(!isLogin)}> Register </span></p>

                            </>
                        ) : (
                            <>

                                <button className="inputBtn" onClick={handelLogin}> Sign Up</button>
                                <p> Have an account ? <span onClick={() => setIsLogin(!isLogin)}> LogIn </span></p>

                            </>
                        )

                        }
                    </div>


                    <div className="row mb-3 text-danger"> {error}</div>



                </form>
            </div>
            <div className="login-from">
                <Button className="google-icon" onClick={singInUserInGoogle}>Google singIn</Button>
                <Button onClick={handlePasswordReset}>ResetPassword</Button>

            </div>
        </div>


    );
};

export default Login;