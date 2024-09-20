import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./componenets/AppRouter";
import NavBar from "./componenets/NavBar";
import Footer from "./componenets/Footer";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
    <NavBar/>
    <ScrollToTop />
    <AppRouter/>   
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
