import NavbarItem from "./navbar-item";
import LoginButton from "./login-button";
import "../../styles/navbar.css"

const items = ["Train", "Leaderboard", "Sign In", "Admin"];

function Navbar() {
    return (
        <div>
            <nav className="navbar">
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