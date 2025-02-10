import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/navbars/Navbar";
import NavbarOnLogin from "./components/navbars/NavbarOnLogin";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import GalleryPage from "./Pages/GalleryPage";
import CommunityPage from "./Pages/CommunityPage";
import useAuthStore from "./store/useAuthStore";
import Footer from "./components/Footer";
import AdminPage from "./Pages/AdminPage";
import Profile from "./Pages/UserProfilePage";
import ViewEventDetails from "./components/eventdetails/ViewEventDetails";

const App = () => {
    const { isAuthenticated, login, logout } = useAuthStore();

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Router>
                <div className="flex flex-col min-h-screen">
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
                            <Route path="/events/:eventId/*" element={isAuthenticated ? <ViewEventDetails /> : <Navigate to="/login" />} />
                            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;