import React from 'react';

const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Basic Information</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Event Name</span>
        </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Time</span>
        </label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="input input-bordered" />
      </div>
    </div>
  );
};

export default Step1;