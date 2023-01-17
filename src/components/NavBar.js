import React from "react";
import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const NavBar = ({name}) => {
    const [user] = useAuthState(auth);

    const signOut = () => {
        auth.signOut();
    };

    return (
        <nav className={user ? "nav-bar2": "nav-bar"}>
            <h1>T-Chat</h1>
            {user && (
                <>
                    <h2>{name}</h2>
                    <button onClick={signOut} className="sign-out" type="button">
                        Sign Out
                    </button>
                </>
            )}
        </nav>
    );
};

export default NavBar;
