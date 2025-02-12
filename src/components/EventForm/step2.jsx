import React from 'react';

const Step2 = ({ formData, handleNestedChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Organizer & Media</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Organizer Name</span>
        </label>
        <input type="text" name="organizer.name" value={formData.organizer.name} onChange={(e) => handleNestedChange(e, 'organizer', 0, 'name')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Profile Picture URL</span>
        </label>
        <input type="text" name="organizer.profilePicture" value={formData.organizer.profilePicture} onChange={(e) => handleNestedChange(e, 'organizer', 0, 'profilePicture')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Event Banner URL</span>
        </label>
        <input type="text" name="eventBanner" value={formData.eventBanner} onChange={handleChange} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Logo URL</span>
        </label>
        <input type="text" name="logo" value={formData.logo} onChange={handleChange} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Instagram</span>
        </label>
        <input type="text" name="socialLinks.instagram" value={formData.socialLinks.instagram} onChange={(e) => handleNestedChange(e, 'socialLinks', 0, 'instagram')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">LinkedIn</span>
        </label>
        <input type="text" name="socialLinks.linkedin" value={formData.socialLinks.linkedin} onChange={(e) => handleNestedChange(e, 'socialLinks', 0, 'linkedin')} className="input input-bordered" />
      </div>
    </div>
  );
};

export default Step2;