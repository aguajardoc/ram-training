import Link from "next/link";
import { signOut } from "next-auth/react";

type Props = {
    ItemName: string,
};

function NavbarItem({ ItemName } : Props) {
    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/sign-in"});
    }

    if (ItemName === "Sign Out") {
        return (
            <a 
                href="#" 
                className="navbar-item" 
                onClick={handleSignOut}
            >
                {ItemName}
            </a>
        );
    }

    return (
        <Link
            className="navbar-item"
            href={`/${ItemName.toLowerCase().replace(" ", "-")}`}
        >
            {ItemName}
        </Link>
    )
}

export default NavbarItem;