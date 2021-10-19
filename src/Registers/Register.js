import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { register, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // onSubmit={ }

    const { singInUserInGoogle, handleRegistration, isLogin, handleNameChange, handleEmailChange, hanndlePasswordChange, hanndleUpdatePassword, toggleLogin, error, handlePasswordReset } = useAuth();

    return (

        <div className="fild">
            <div className="header">
                <h2 > Please Register </h2>
            </div>

            <div >
                <form className=" input-fied" onSubmit={handleRegistration}>

                    <input className="input" placeholder="your name " onBlur={handleNameChange} {...register("Name")} />


                    <input className="input" placeholder="valide emaile" onBlur={handleEmailChange} {...register("Email", { required: true })} />

                    {errors.exampleRequired && <span className="">Eamil required </span>}

                    <input className="input" type="password" placeholder="more then 8 characters" onBlur={hanndlePasswordChange} {...register("Password", { required: true })} />

                    {errors.exampleRequired && <span className="">Password</span>}

                    <input className="input" type="password" placeholder="Re-enter passsword" onBlur={hanndlePasswordChange} {...register("Password", { required: true })} />

                    {errors.exampleRequired && <span className="">Password</span>}

                    <input className="inputBtn" type="submit" />

                </form>
                <p>New to Optilica ? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;