import React, { useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const NavbarComponent = ({ isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate()
  const { isAuth } = useContext(AuthContext)
  return (
    <div>
      <Navbar fluid rounded className="shadow-md">
        <Navbar.Brand href="/">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Wander Thoughts</span>
        </Navbar.Brand>
        {isAuth ? (
          null
        ) : (<div className="flex md:order-2 gap-2">
          <Button color='light' onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/register')}>Register</Button>
          <Navbar.Toggle />
        </div>)}
        {/* <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
