import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Sidebar from "./TeacherDashboardSections/Sidebar";
import SideDrawer from "./TeacherDashboardSections/SideDrawer"; // Import SideDrawer
import EventCreationPanel from "./TeacherDashboardSections/EventCreationPanel";
import EventList from "./TeacherDashboardSections/EventList";
import SearchAndFilter from "./TeacherDashboardSections/SearchAndFilter";
import PerformanceMetrics from "./TeacherDashboardSections/PerformanceMetrics";
import CalendarView from "./TeacherDashboardSections/CalendarView";
import Announcements from "./TeacherDashboardSections/Announcements";
import PendingApprovals from "./TeacherDashboardSections/PendingApprovals";

export default function TeachersDashboard() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* Conditionally render Sidebar for large screens and SideDrawer for mobile */}
      

      <main className="flex-1 overflow-y-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto"
        >
          <h1 className="text-3xl font-bold mb-8 text-indigo-800">Teachers Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <EventCreationPanel />
              <SearchAndFilter />
              <EventList title="Active Events" status="active" />
              <EventList title="Past Events" status="past" />
            </div>
            <div className="space-y-8">
              <PerformanceMetrics />
              <CalendarView />
              <Announcements />
              <PendingApprovals />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
