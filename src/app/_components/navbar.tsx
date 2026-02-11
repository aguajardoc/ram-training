"use client"
import { useEffect, useRef } from "react";
import NavbarItem from "./navbar-item";
import "../../styles/navbar.css"
import type { Session } from "next-auth";
import type { Role } from "generated/prisma";
import { redirect } from "next/navigation";
import LoginButton from "./login-button";

const items = ["Train", "Leaderboard", "Sign Out", "Admin"];

type Props = {
    session: Session | null,
    role: Role | undefined,
};

function Navbar({ session, role } : Props) {
    const navbarRef = useRef<HTMLElement | null>(null);
    const lastScrollY = useRef(0);

    if (!session) {
        return(<></>);
    }

    useEffect(() => {
        const handleScroll = () => {
        if (!navbarRef.current) return;

        const cur = window.scrollY;

        if (cur > lastScrollY.current && cur > 50) {
            // scrolling down → close
            navbarRef.current.classList.add("hidden");
            navbarRef.current.classList.remove("visible");
        } else {
            // scrolling up → open
            navbarRef.current.classList.add("visible");
            navbarRef.current.classList.remove("hidden");
        }

        lastScrollY.current = cur;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav ref={navbarRef} className="navbar visible">
                {items.map(i => {
                    if (i === "Admin" && role !== "ADMIN") return null;
                    return(
                        <NavbarItem
                            key={i}
                            ItemName={i}
                        />
                    )
                }
                )}
            </nav>
        </div>
    );
}


export default Navbar;