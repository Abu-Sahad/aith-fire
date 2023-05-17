import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    ///step-1
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //step-2
    const authInfo = {
        user,
        createUser,
        logInUser
    }
    return (
        //step-3
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        // <div></div>

    );
};

export default AuthProviders;