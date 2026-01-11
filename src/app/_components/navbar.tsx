"use client"
import { useEffect, useRef } from "react";
import NavbarItem from "./navbar-item";
import "../../styles/navbar.css"

const items = ["Train", "Leaderboard", "Sign Out", "Admin"];

function Navbar() {
    const navbarRef = useRef<HTMLElement | null>(null);
    const lastScrollY = useRef(0);

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
                {items.map(i => 
                    <NavbarItem
                        key={i}
                        ItemName={i}
                    />
                )}
            </nav>
        </div>
    );
}


export default Navbar;