import React from "react";
import { Mail, Phone, Edit2, BadgeCheck, ClipboardList, Linkedin, Github, Globe, Instagram, Calendar } from "lucide-react";

const PersonalDetails = ({ setShowDrawer }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-none md:rounded-2xl md:shadow-lg flex flex-col items-center md:items-start space-y-6 md:space-y-8">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 ">Personal Details</h1>
        <button className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition text-sm md:text-base">
          <Edit2 className="w-4 h-4" />
          <span>Edit</span>
        </button>
      </div>

      {/* Profile Picture & Basic Info */}
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-6 w-full">
        <div className="relative">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
            <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-500 flex items-center justify-center md:justify-start text-sm md:text-base">
            <Mail className="w-4 h-4 mr-2 text-gray-600" /> johndoe@example.com
          </p>
          {/* Bio Section */}
          <div className="mt-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-700 text-center md:text-left">Bio</h2>
            <p className="text-gray-600 bg-gray-100 p-3 md:p-4 rounded-lg shadow-sm text-center md:text-left text-sm md:text-base">
              Passionate software developer with a keen interest in full-stack web development and AI. 
              Always eager to learn and collaborate on new projects.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 w-full">
        <InfoCard icon={<Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />} label="Phone" value="+1 234 567 890" />
        <InfoCard icon={<BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />} label="College Roll No." value="SDIET12345" />
        <InfoCard icon={<ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />} label="University Roll No." value="UNI67890" />
        <InfoCard icon={<BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />} label="Department" value="Computer Science" />
        <InfoCard icon={<Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />} label="Study Year" value="3rd Year" />
      </div>

      {/* Social Links */}
      <div className="w-full">
        <h2 className="text-base md:text-lg font-semibold text-gray-700 text-center md:text-left">Social Links</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-2 md:mt-3">
          <SocialLink icon={<Linkedin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />} label="LinkedIn" url="#" />
          <SocialLink icon={<Github className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />} label="GitHub" url="#" />
          <SocialLink icon={<Globe className="w-4 h-4 md:w-5 md:h-5 text-green-600" />} label="Portfolio" url="#" />
          <SocialLink icon={<Instagram className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />} label="Instagram" url="#" />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-100 rounded-lg shadow-sm w-full">
    {icon}
    <div>
      <h3 className="text-xs md:text-sm text-gray-500">{label}</h3>
      <p className="text-gray-900 font-medium text-sm md:text-base">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ icon, label, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 md:space-x-2 bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md hover:bg-gray-200 transition text-sm md:text-base">
    {icon}
    <span className="text-gray-900">{label}</span>
  </a>
);

export default PersonalDetails;
