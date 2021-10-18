import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();


    // google singIn

    const singInUserInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            });
    }

    // Logout or signOut

    const logOut = () => {
        signOut(auth)
            .then(() => { })

    }
    return {
        user,
        logOut,
        singInUserInGoogle

    }

}
export default useFirebase;