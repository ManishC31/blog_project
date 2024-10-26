import React, { createContext, useState, useEffect } from "react";

// Create a context object with default values
const AuthContext = createContext({
  currentUser: null,
  isAuth: false,
  login: () => {},
  logout: () => {},
});

// Export the context for other components to consume
export default AuthContext;

// AuthProvider component definition
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuth, setIsAuth] = useState(!!currentUser); // Initialize based on currentUser

  useEffect(() => {
    // Update localStorage and isAuth state when currentUser changes
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      setIsAuth(true);
    } else {
      localStorage.removeItem("user");
      setIsAuth(false);
    }
  }, [currentUser]);

  // Function to handle user login
  const login = (user) => {
    setCurrentUser(user);
  };

  // Function to handle user logout
  const logout = () => {
    console.log("logout function called");
    setCurrentUser(null);
    setCurrentUser(false);
  };

  // Render the AuthContext.Provider with provided values
  return <AuthContext.Provider value={{ currentUser, isAuth, setIsAuth, login, logout }}>{children}</AuthContext.Provider>;
};
