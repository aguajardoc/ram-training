"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import "../../styles/login-button.css"

function LoginButton() {
    const { data: session} = useSession();

    if (session) {
        return (
        <button className="login-button"
            onClick={() => signOut()}
        >
            Sign out
        </button>
        );
    }

    return (
        <button className="login-button"
            onClick={() => signIn("google")}
        >
        Sign in with Google
        </button>
    );
}

export default LoginButton;