import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header bg-[#402d4a] border-2 border-[#ACC7B4] rounded-lg p-5 mb-5">
            <span >
            <h1 className="inline text-lg sm:text-2xl">Ticketing App</h1>
            <nav className="inline pl-15">
                <Link to="/">Home</Link>
            </nav>
            </span>
        </div>
    );
}

export default Header;