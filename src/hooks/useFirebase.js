import {

    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();



    // Emaile and Password useing Logaing system addad 

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 8) {
            setError("Password Must be at least  6 Characters long")

            return;
        }
        // Regex to validate password strength

        // if (/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8}$/.test.password) {
        //     setError("Minmum length 8  two digits tow lowercase letters  one special case letter two uppercase letters")

        //     return;

        // }

        isLogin ? loginProcess(email, password) : registerNewUser(email, password)

    }


    // email & password login system
    const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')

            })

    }


    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
    }


    // setUserName and update userName

    const setUserName = () => {

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => { })
    }



    // Email verify system apply 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

                console.log(result);
            })
    }

    //PasswordResetEmail
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }


    const handelLogin = (e) => {
        setIsLogin(e.target.checked);
    }

    // name change

    const handleNameChange = (e) => {
        setName(e.target.value);

    }
    //email change

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const hanndlePasswordChange = event => {
        setPassword(event.target.value);
    }
    // const hanndleUpdatePassword = e => {
    //     setUpdatePassword(e.target.value)
    // }

    // google singIn

    const singInUserInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;

    }, []);

    // Logout or signOut

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }
    return {
        user,
        logOut,
        singInUserInGoogle,
        handleRegistration,
        handelLogin,
        handleNameChange,
        handleEmailChange,
        hanndlePasswordChange,
        handlePasswordReset,
        isLogin,
        error,
        setIsLogin


    }

}
export default useFirebase;