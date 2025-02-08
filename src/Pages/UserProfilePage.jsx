import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import CenteredContainer from "../components/CenteredContainer";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileDrawer from "../components/Profile/ProfileDrawer";
import ProfileContent from "../components/Profile/ProfileContent";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <CenteredContainer>
      <div className="flex flex-col md:flex-row min-h-screen pb-20 md:pb-10 lg:pb-6 w-full p-4">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-3 bg-gray-200 rounded-lg mb-4"
          onClick={() => setShowDrawer(true)}
        >
          <FaBars className="text-gray-700" />
        </button>

        {/* Sidebar */}
        <ProfileSidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Mobile Drawer */}
        <ProfileDrawer
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Content Area */}
        <ProfileContent activeSection={activeSection} />
      </div>
    </CenteredContainer>
  );
};

export default Profile;
