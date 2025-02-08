import React from "react";
import { motion } from "framer-motion";
import PersonalDetails from "./sections/PersonalDetails";
import Security from "./sections/Security";
import Settings from "./sections/Settings";
import MyEvents from "./sections/MyEvents";
import Community from "./sections/Community";
import Notifications from "./sections/Notifications";

const ProfileContent = ({ activeSection }) => {
  return (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="md:w-3/4 w-full bg-white rounded-2xl"
    >
      {activeSection === "personal" && <PersonalDetails />}
      {activeSection === "events" && <MyEvents />}
      {activeSection === "security" && <Security />}
      {activeSection === "settings" && <Settings />}
      {activeSection === "community" && <Community />}
      {activeSection === "notifications" && <Notifications />}
    </motion.div>
  );
};

export default ProfileContent;
