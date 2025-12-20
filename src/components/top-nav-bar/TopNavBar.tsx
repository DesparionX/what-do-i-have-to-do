import { Link } from "react-router"
import { useAuth } from "../../hooks/services-hooks/AuthHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket, faClipboardList, faFileCirclePlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function TopNavBar() {

  const {currentUser, logOut} = useAuth();

  let profileLink;
  let loggedLinks;
  let authLink;
  const logo = (
    <div className="flex-1">
        <Link to="/">
          <img src="/logo.png" alt="Site Logo" className="inline h-17 absolute top-0 left-5 logo"/> </Link>
      </div>
  );

  if (currentUser) {
    profileLink = (
      <div className="flex-none mx-auto profile-link">
        <Link to="/" className="normal-case custom-nav-link text-xxl m-auto">
          {currentUser.userName}
        </Link>
      </div>
    );

    authLink = (
      <button onClick={logOut} className="font-bold custom-nav-link m-2 hover:cursor-pointer">
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="mobile-nav-link mr-2"/>
        <p className="pc-nav-link mr-5">Log Out</p>
      </button>
    );
    
    
    loggedLinks = (
      <>
        <Link to="/addit-note" className="font-bold custom-nav-link m-2">
          <FontAwesomeIcon icon={faFileCirclePlus} className="mobile-nav-link"/>
          <p className="pc-nav-link">Add note</p>
        </Link>
        <Link to="/notes" className="font-bold custom-nav-link m-2">
          <FontAwesomeIcon icon={faClipboardList} className="mobile-nav-link"/>
          <p className="pc-nav-link">Notes</p>
        </Link>
      </>
    )
  }
  else
    authLink = (
      <>
      <Link to="/register" className="font-bold custom-nav-link m-2">
          <FontAwesomeIcon icon={faUserPlus} className="mobile-nav-link"/>
          <p className="pc-nav-link">Register</p>
      </Link>
      <Link to="/login" className="font-bold custom-nav-link m-2 mr-5">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="mobile-nav-link"/>
          <p className="pc-nav-link">Log In</p>
      </Link>
      </>
    )

  return (
    <div className="navbar custom-navbar flex-row p-0">
      {logo}
      {profileLink}
      <nav className="flex flex-1 flex-row justify-end">
        {loggedLinks}
        {authLink}
      </nav>
    </div>
  );
}
