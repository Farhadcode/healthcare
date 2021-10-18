import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { Button } from 'react-bootstrap';
import gooleIcon from '../../Images/download.jfif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { singInUserInGoogle } = useAuth();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // onSubmit={ }

    return (

        <div className="fild">
            <div className="header">
                <h2 > Please Login </h2>
            </div>

            <div >
                <form className=" input-fied" onSubmit={handleSubmit(onSubmit)}>

                    <input className="input" placeholder="your name "{...register("Name")} />


                    <input className="input" placeholder="valide emaile" {...register("Email", { required: true })} />

                    {errors.exampleRequired && <span className="">Eamil required </span>}

                    <input className="input" type="password" placeholder="more then 8 characters" {...register("Password", { required: true })} />

                    {errors.exampleRequired && <span className="">Password</span>}

                    <input className="inputBtn" type="submit" />
                </form>
            </div>

            <div>
                <Button className="google-icon" onClick={singInUserInGoogle}>Google singIn</Button>
            </div>
        </div>
    );
};

export default Login;