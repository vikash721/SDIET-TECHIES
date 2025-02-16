import React, { useState } from "react";
import CoordinatorSidebar from "./CoordinatorSidebar";
import CoordinatorDrawer from "./CoordinatorDrawer"; // Import the drawer
import CoordinatorDashboardContent from "./CoordinatorDashboardContent";
import CenteredContainer from "../../CenteredContainer";

const CoordinatorEventManageDashboard = () => {
  const [activeSection, setActiveSection] = useState("eventdetails");

  return (
    <CenteredContainer>
      <div className="flex flex-col min-h-screen pt-8 relative">
        {/* Mobile Drawer */}
        <CoordinatorDrawer activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="flex flex-col md:flex-row flex-1 gap-6 w-full">
          {/* Sidebar (Visible on large screens) */}
          <div className="hidden md:block w-[250px] flex-shrink-0">
            <CoordinatorSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          {/* Main Content (Takes Remaining Space) */}
          <CoordinatorDashboardContent activeSection={activeSection} />
        </div>
      </div>
    </CenteredContainer>
  );
};

export default CoordinatorEventManageDashboard;
