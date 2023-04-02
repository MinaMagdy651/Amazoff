import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function NavbarSwithcer({ children }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register")
      setShowNavbar(false);
    else setShowNavbar(true);
  }, [location]);
  return <div>{showNavbar && children}</div>;
}
