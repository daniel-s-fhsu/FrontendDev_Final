import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1>Ticketing</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export default Header;