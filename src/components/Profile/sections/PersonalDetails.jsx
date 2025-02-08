import React, { useState } from "react";
import { Mail, Phone, Edit2, Save, X, Linkedin, Github, Globe, Instagram } from "lucide-react";
import useUserStore from "../../../store/useUserStore";
import { label } from "framer-motion/client";

const PersonalDetails = () => {
  const { userData, updateUser } = useUserStore(); // Use updateUser instead of setUserData
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateUser(editedData); // Update Zustand store
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-none md:rounded-2xl md:shadow-lg flex flex-col items-center md:items-start space-y-6 md:space-y-8">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Personal Details</h1>
        {isEditing ? (
          <div className="flex space-x-2">
            <button onClick={handleSave} className="flex items-center space-x-2 px-3 py-1.5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition text-sm">
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button onClick={() => setIsEditing(false)} className="flex items-center space-x-2 px-3 py-1.5 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition text-sm">
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)} className="flex items-center space-x-2 px-3 py-1.5 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition text-sm">
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        )}
      </div>

      {/* Profile Picture & Basic Info */}
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-6 w-full">
        <div className="relative">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
            <img src={userData.profileImage || "https://via.placeholder.com/150"} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
            {isEditing ? (
              <input type="text" name="name" value={editedData.name} onChange={handleChange} className="border p-1 rounded-md text-lg md:text-xl" />
            ) : (
              userData.name
            )}
          </h3>
          <p className="text-gray-500 flex items-center justify-center md:justify-start text-sm md:text-base">
            <Mail className="w-4 h-4 mr-2 text-gray-600" />
            {userData.email}
          </p>
          {/* Bio Section */}
          <div className="mt-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-700 text-center md:text-left">Bio</h2>
            {isEditing ? (
              <textarea name="bio" value={editedData.bio} onChange={handleChange} className="border p-2 rounded-md w-full text-sm md:text-base" />
            ) : (
              <p className="text-gray-600 bg-gray-100 p-3 md:p-4 rounded-lg shadow-sm text-center md:text-left text-sm md:text-base">
                {userData.bio || "No bio available."}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 w-full">
        <InfoCard label="Phone" name="phone" value={editedData.phone} isEditing={isEditing} onChange={handleChange} />
        <InfoCard label="College Roll No." name="collegeRollNo" value={editedData.collegeRollNo} isEditing={isEditing} onChange={handleChange} />
        <InfoCard label="University Roll No." name="universityRollNo" value={editedData.universityRollNo} isEditing={isEditing} onChange={handleChange} />
        <InfoCard label="Department" name="department" value={editedData.department} isEditing={isEditing} onChange={handleChange} />
        <InfoCard label="Study Year" name="studyYear" value={editedData.studyYear} isEditing={isEditing} onChange={handleChange} />
      </div>

      {/* Social Links */}
      <div className="w-full">
        <h2 className="text-base md:text-lg font-semibold text-gray-700 text-center md:text-left">Social Links</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-2 md:mt-3">
          <SocialLink name="linkedin" icon={<Linkedin className="text-blue-600" />} value={editedData.linkedin} isEditing={isEditing} onChange={handleChange} />
          <SocialLink name="github" icon={<Github className="text-gray-800" />} value={editedData.github} isEditing={isEditing} onChange={handleChange} />
          <SocialLink name="portfolio" icon={<Globe className="text-green-600" />} value={editedData.portfolio} isEditing={isEditing} onChange={handleChange} />
          <SocialLink name="instagram" icon={<Instagram className="text-pink-600" />} value={editedData.instagram} isEditing={isEditing} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

// InfoCard component for personal details
const InfoCard = ({ label, name, value, isEditing, onChange }) => (
  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-100 rounded-lg shadow-sm w-full">
    <div>
      <h3 className="text-xs md:text-sm text-gray-500">{label}</h3>
      {isEditing ? (
        <input type="text" name={name} value={value} onChange={onChange} className="border p-1 rounded-md w-full text-sm md:text-base" />
      ) : (
        <p className="text-gray-900 font-medium text-sm md:text-base">{value}</p>
      )}
    </div>
  </div>
);

// SocialLink component for social media links
const SocialLink = ({ name, icon, value, isEditing, onChange }) => (
  <div className="w-auto">
    {isEditing ? (
      <div className="flex flex-col space-y-1">
        <label className="text-xs md:text-sm text-gray-600 font-medium">{`Enter ${name.charAt(0).toUpperCase() + name.slice(1)} URL`}</label>
        <input 
          type="text" 
          name={name} 
          value={value} 
          onChange={onChange} 
          className="border p-1 rounded-md w-full text-sm md:text-base" 
          placeholder={`Paste your ${name} link here...`} 
        />
      </div>
    ) : (
      <a 
        href={value || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        {icon}
      </a>
    )}
  </div>
);


export default PersonalDetails;
