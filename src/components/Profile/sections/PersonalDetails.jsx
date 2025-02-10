import React, { useState } from "react";
import { Mail, Phone, Edit2, Save, X, Linkedin, Github, Globe, Instagram } from "lucide-react";
import useUserStore from "../../../store/useUserStore";

const PersonalDetails = () => {
  const { userData, updateUser } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });
  const [bioLength, setBioLength] = useState(userData.bio ? userData.bio.length : 0);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
    if (e.target.name === "bio") {
      setBioLength(e.target.value.length);
    }
  };

  // Handle phone number input with +91 prefix
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers allowed
    if (value.length <= 10) {
      setEditedData({ ...editedData, phone: value });
    }
  };

  // Validate phone number (exactly 10 digits)
  const validatePhoneNumber = () => {
    if (editedData.phone && editedData.phone.length !== 10) {
      setPhoneError("Invalid number. Phone number must be 10 digits.");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const handleSave = () => {
    if (bioLength <= 200 && validatePhoneNumber()) { // Ensure phone number is valid
      updateUser(editedData); // Update Zustand store
      setIsEditing(false);
    }
  };

  // Function to format phone number in 5 + 5 format
  const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    const firstFive = phone.slice(0, 5);
    const lastFive = phone.slice(5, 10);
    return `${firstFive} ${lastFive}`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 md:rounded-xl md:shadow-lg flex flex-col items-center md:items-start space-y-6 md:space-y-8 rounded-lg  border border-gray-200">
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
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-4 w-full">
        <h2 className="text-base md:text-lg font-semibold text-gray-700 text-center md:text-left">Bio</h2>
        {isEditing ? (
          <textarea
            name="bio"
            value={editedData.bio}
            onChange={handleChange}
            maxLength="200" // Increased max length to 200
            className="border p-2 rounded-md w-full text-sm md:text-base resize-none overflow-wrap break-words"
            style={{
              minHeight: '120px', // Minimum height for mobile
              height: 'auto', // Let the height adjust based on content
            }}
          />
        ) : (
          <p className="text-gray-600 bg-gray-100 p-3 md:p-4 rounded-lg shadow-sm text-center md:text-left text-sm md:text-base break-words">
            {userData.bio || "No bio available."}
          </p>
        )}
        {isEditing && (
          <p className="text-sm text-gray-500 mt-1">
            {bioLength}/200 {bioLength > 200 && <span className="text-red-600">Max limit reached!</span>}
          </p>
        )}
      </div>

      {/* Phone Number Section */}
      <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-100 rounded-lg shadow-sm w-full">
        <div>
          <h3 className="text-xs md:text-sm text-gray-500">Phone</h3>
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-xl">+91</span>
              <input
                type="text"
                name="phone"
                value={editedData.phone}
                onChange={handlePhoneChange}
                maxLength="10" // Restricting to 10 digits
                className="border p-1 rounded-md w-full text-sm md:text-base"
                placeholder="Enter phone number"
              />
            </div>
          ) : (
            <p className="text-gray-900 font-medium text-sm md:text-base">{editedData.phone ? `+91 ${formatPhoneNumber(editedData.phone)}` : "Not provided"}</p>
          )}
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 w-full">
     

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
