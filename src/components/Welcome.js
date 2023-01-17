import React from "react";
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";
import {auth, provider} from "../firebase";
import {signInWithPopup} from "firebase/auth"

const Welcome = () => {

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        // setLoading(true)
        // const provider = new GoogleAuthProvider();
        // signInWithRedirect(auth, provider).then(r => setLoading(false));
    };

    return (
        <main className="welcome">
            <h2>Welcome to T-Chat.</h2>
            <p>Sign in with Google to start chat.</p>

            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignIn}
                    alt="sign in with google"
                    type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;
