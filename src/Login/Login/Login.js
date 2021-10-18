import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { singInUserInGoogle } = useAuth();
    return (

        <div>

            <button onClick={singInUserInGoogle}> Google Sing In </button>
        </div>
    );
};

export default Login;