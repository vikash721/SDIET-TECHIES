import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./../Pages/HomePage";
import LoginPage from "./../Pages/LoginPage";
import EventPage from "./../Pages/EventPage";
import GalleryPage from "./../Pages/GalleryPage";
import CommunityPage from "./../Pages/CommunityPage";
import AdminPage from "./../Pages/AdminPage";
import Profile from "./../Pages/UserProfilePage";
import ViewEventDetails from "./../components/eventdetails/ViewEventDetails";
import About from "./../components/eventdetails/eventnavigations/About";
import Schedule from "./../components/eventdetails/eventnavigations/Schedule";
import Guidelines from "./../components/eventdetails/eventnavigations/Guidelines";
import Announcements from "./../components/eventdetails/eventnavigations/Announcements";
import ContactPage from "./../components/eventdetails/eventnavigations/ContactPage";
import Faq from "./../components/eventdetails/eventnavigations/Faq";
import CoordinatorDashboard from "../Pages/CoordinatorDashboard";
import Layout from "./../Layout/layout";
import ProtectedRoute from "./ProtectedRoute";
import CoordinatorEventManageDashboard from "../components/Dashboards/coordinator-dashboard/CoordinatorEventManageDashboard";
import CoordinatorDashboardOverview from "../components/Dashboards/coordinator-dashboard/CoordinatorDashboardOverview";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps all pages with Navbar and Footer
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/events", element: <ProtectedRoute element={<EventPage />} /> },
      {
        path: "/events/:eventId",
        element: <ProtectedRoute element={<ViewEventDetails />} />,
        children: [
          { path: "about", element: <About/> },
          { path: "schedule", element: <Schedule /> },
          { path: "guidelines", element: <Guidelines /> },
          { path: "announcements", element: <Announcements /> },
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <Faq /> },
        ],
      },
      { path: "/community", element: <ProtectedRoute element={<CommunityPage />} /> },
      { path: "/gallery", element: <ProtectedRoute element={<GalleryPage />} /> },
      { path: "/admin", element: <ProtectedRoute element={<AdminPage />} /> },
      { path: "/profile", element: <ProtectedRoute element={<Profile />} /> },
      { path: "/manage-events", element: <ProtectedRoute element={<CoordinatorDashboardOverview />} /> },
      { path: "/coordinator-event-dashboard", element: <ProtectedRoute element={<CoordinatorEventManageDashboard />} /> },
      { path: "*", element: <Navigate to="/" replace /> }, // Redirect unknown routes
    ],
  },
]);

export default router;