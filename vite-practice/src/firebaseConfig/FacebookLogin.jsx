import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { FacebookAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const FacebookLogin = () => {
    const [user, setUser] = useState({ displayName: "", email: "", idToken: "", photoUrl: "" });

    const handleFacebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const { displayName, email, uid, photoURL } = result.user; // Use result.user instead
            setUser({
                displayName,
                email,
                idToken: uid,
                photoUrl: photoURL
            });
            console.log("signIn", result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        signOut(auth);
        setUser({ displayName: "", email: "", idToken: "", photoUrl: "" });
    };

    return (
        <div>
            <h2>Sign In With Facebook</h2>
            {
                Object.values(user)?.every(value => value === "")
                    ?
                    <button onClick={handleFacebookSignIn}> {/* Changed the function name */}
                        <img src="https://img.icons8.com/?size=1x&id=13912&format=png" alt="Facebook Icon" />
                    </button>
                    :
                    <button onClick={handleLogout}>Logout</button>
            }
            <div>
                {user.photoUrl && (
                    <div>
                        <img src={user.photoUrl} alt={user.displayName} />
                    </div>
                )}
                <div>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                    <p>{user.idToken}</p>
                </div>
            </div>
        </div>
    );
};

export default FacebookLogin;
