import React, { useEffect, useState } from "react";
import { Button, Flowbite } from "flowbite-react";
import { AuthProvider } from "./store/AuthContext";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") && localStorage.getItem("darkMode") === "true");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);
  return (
    <AuthProvider>
      <Toaster />
      <Flowbite>
        {/* routes */}
        <Router>
          <div className="">
            <aside class="sticky top-0">
              {/* Navbar is placed here to appear across all routes */}
              <NavbarComponent setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
            </aside>
            {/* Define Routes */}
            <div className="">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Add more routes as needed */}
              </Routes>
            </div>
          </div>
        </Router>
      </Flowbite>
    </AuthProvider>
  );
};

export default App;
