import {

    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();


    // email & password login system
    // const emailLoginProces = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user;

    //         })

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
        isLoading,

    }

}
export default useFirebase;