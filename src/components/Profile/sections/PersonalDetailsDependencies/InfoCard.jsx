import React from "react";

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

export default InfoCard;