import { Link } from "react-router";

function BasicLink({ linkUrl, handleClick, children }) {
    return (
      <Link
        to={linkUrl}
        onClick={handleClick}
        className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600 mx-1 sm:mx-5"

      >
        {children}
      </Link>
    );
  }
  
  export default BasicLink;
  