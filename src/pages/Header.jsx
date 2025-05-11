import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../UserContext";
import BasicLink from "../components/BasicComponents/BasicLink";

function Header() {
    const navigate = useNavigate();
    const {user, logout} = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signIn");
            alert("Log out successful");

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="header bg-[#402d4a] border-2 border-[#ACC7B4] rounded-lg p-5 mb-5">
            <span >
            <h1 className="inline text-lg sm:text-2xl">Ticketing App</h1>
            <nav className="inline pl-15">
                <BasicLink linkUrl="/">Home</BasicLink>

                {user ? (
                    <>
                    <BasicLink linkUrl="/profile">Profile</BasicLink>
                    <BasicLink handleClick={handleLogout}>Logout</BasicLink>
                    </>
                ) : (
                    <BasicLink linkUrl="/signIn">Sign In</BasicLink>
                )}
            </nav>
            </span>
        </div>
    );
}

export default Header;