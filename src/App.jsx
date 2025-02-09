import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import NavbarOnLogin from "./components/NavbarOnLogin";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import GalleryPage from "./Pages/GalleryPage";
import CommunityPage from "./Pages/CommunityPage";
import useAuthStore from "./store/useAuthStore"; // Import Zustand store
import Footer from "./components/Footer"; // Import the Footer component
import AdminPage from "./Pages/AdminPage";
import Profile from "./Pages/UserProfilePage";

// import UserProfilePage from "./Pages/UserProfilePage";

const App = () => {
    const { isAuthenticated, login, logout } = useAuthStore(); // Get Zustand state

    return (
        <GoogleOAuthProvider clientId="544879921846-p6btmlu006t345ls2h2seranm7a87q08.apps.googleusercontent.com">
            <Router>
                {/* Wrapping the entire app in a flex container */}
                <div className="flex flex-col min-h-screen">
                    {/* Navbar changes based on authentication */}
                    {isAuthenticated ? <NavbarOnLogin onLogout={logout} /> : <Navbar onLogin={login} />}

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
                            <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
                            <Route path="/events" element={isAuthenticated ? <EventPage /> : <Navigate to="/login" />} />
                            <Route path="/community" element={isAuthenticated ? <CommunityPage /> : <Navigate to="/login" />} />
                            <Route path="/gallery" element={isAuthenticated ? <GalleryPage /> : <Navigate to="/login" />} />
                            <Route path="/admin" element={isAuthenticated ? <AdminPage /> : <Navigate to="/login" />} />
                            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />

                            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
                        </Routes>
                    </main>

                    {/* Footer always at the bottom */}
                    <Footer />
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
