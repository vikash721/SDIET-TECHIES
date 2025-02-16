import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbars/Navbar";
import NavbarOnLogin from "../components/navbars/NavbarOnLogin";
import Footer from "../components/Footer";
import useAuthStore from "../store/useAuthStore";

const Layout = () => {
    const { isAuthenticated, logout, login } = useAuthStore();

    return (
        <div className="flex flex-col min-h-screen">
            {isAuthenticated ? <NavbarOnLogin onLogout={logout} /> : <Navbar onLogin={login} />}
            <main className="flex-grow">
                <Outlet /> {/* This will render the child components dynamically */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
