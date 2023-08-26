import React, { useState } from 'react'
import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const GoogleLogin = () => {
    const [user, setUser] = useState({displayName: "", email: "", idToken: "", photoUrl: ""});

    // Log in -
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        try{
            const result = await signInWithPopup(auth, provider);
            const {displayName, email, idToken, photoUrl} = result._tokenResponse;
            setUser ({displayName, email, idToken, photoUrl})
            console.log("signIn", result);
        }
        catch(error){
            console.log(error);
        }
    }

    // Log out -
    const handleLogout = () => {
        signOut(auth);
        setUser({displayName: "", email: "", idToken: "", photoUrl: ""})
    }

    return (
        <div>
            <h2>Sign In With Google</h2>
            {
                Object.values(user)?.every(value => value === "") 
                    ? 
                    <button onClick={handleGoogleSignIn}>
                        <img src="https://img.icons8.com/?size=1x&id=17949&format=png" alt="" />
                    </button> 
                    :
                    <button onClick={handleLogout}>Logout</button>
            }
            <div>
                <div>
                    <img src={user?.photoUrl} alt={user?.displayName} />
                </div>
                <div>
                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                    <p>{user?.idToken}</p>
                </div>
            </div>
        </div>
    )
}

export default GoogleLogin
