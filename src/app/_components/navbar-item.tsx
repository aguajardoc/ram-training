import Link from "next/link";

type Props = {
    ItemName: string,
};

function NavbarItem({ ItemName } : Props) {
    return (
        <Link
            className="navbar-item"
            href={`/${ItemName.toLowerCase().replace(" ", "")}`}
        >
            {ItemName}
        </Link>
    )
}

export default NavbarItem;