import React, { useState, useEffect } from "react";
import CenteredContainer from "../components/CenteredContainer";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileDrawer from "../components/Profile/ProfileDrawer";
import ProfileContent from "../components/Profile/ProfileContent";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check screen size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowDrawer(false); // Close drawer when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CenteredContainer>
    <div className="flex flex-col md:flex-row min-h-screen lg:pb-6 w-full p-4 gap-4 md:gap-6 lg:gap-8">
      {/* Sidebar (Visible on Desktop) */}
      <ProfileSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
  
      {/* Mobile Drawer (Visible on Small Screens) */}
      {isMobile && (
        <ProfileDrawer
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
  
      {/* Content Area */}
      <ProfileContent activeSection={activeSection} />
    </div>
  </CenteredContainer>
  
  );
};

export default Profile;
