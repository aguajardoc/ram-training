"use client"
import { signIn, signOut, useSession } from "next-auth/react";

function LoginButton() {
    const { data: session} = useSession();

    if (session) {
        return (
        <button onClick={() => signOut()}>
            Sign out
        </button>
        );
    }

    return (
        <button onClick={() => signIn("google")}>
        Sign in with Google
        </button>
    );
}

export default LoginButton;