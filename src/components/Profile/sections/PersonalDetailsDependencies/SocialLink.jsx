import React from "react";

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

export default SocialLink;