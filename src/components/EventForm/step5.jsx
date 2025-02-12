import React from 'react';

const Step5 = ({ formData, handleNestedChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 5: Schedule & People</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Event Date</span>
        </label>
        <input type="date" name="scheduleData.eventDate" value={formData.scheduleData.eventDate} onChange={(e) => handleNestedChange(e, 'scheduleData', 0, 'eventDate')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Event Time</span>
        </label>
        <input type="text" name="scheduleData.eventTime" value={formData.scheduleData.eventTime} onChange={(e) => handleNestedChange(e, 'scheduleData', 0, 'eventTime')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input type="text" name="scheduleData.location" value={formData.scheduleData.location} onChange={(e) => handleNestedChange(e, 'scheduleData', 0, 'location')} className="input input-bordered" />
      </div>
      {formData.scheduleData.timeline.map((item, index) => (
        <div key={index} className="form-control mb-4">
          <label className="label">
            <span className="label-text">Timeline Title</span>
          </label>
          <input type="text" name={`scheduleData.timeline[${index}].title`} value={item.title} onChange={(e) => handleNestedChange(e, 'scheduleData.timeline', index, 'title')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Timeline Time</span>
          </label>
          <input type="text" name={`scheduleData.timeline[${index}].time`} value={item.time} onChange={(e) => handleNestedChange(e, 'scheduleData.timeline', index, 'time')} className="input input-bordered" />
        </div>
      ))}
      {formData.people.map((person, index) => (
        <div key={index} className="form-control mb-4">
          <label className="label">
            <span className="label-text">Person Name</span>
          </label>
          <input type="text" name={`people[${index}].name`} value={person.name} onChange={(e) => handleNestedChange(e, 'people', index, 'name')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Person Role</span>
          </label>
          <input type="text" name={`people[${index}].role`} value={person.role} onChange={(e) => handleNestedChange(e, 'people', index, 'role')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Person Email</span>
          </label>
          <input type="email" name={`people[${index}].email`} value={person.email} onChange={(e) => handleNestedChange(e, 'people', index, 'email')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Person Phone</span>
          </label>
          <input type="tel" name={`people[${index}].phone`} value={person.phone} onChange={(e) => handleNestedChange(e, 'people', index, 'phone')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Person Image URL</span>
          </label>
          <input type="text" name={`people[${index}].image`} value={person.image} onChange={(e) => handleNestedChange(e, 'people', index, 'image')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Person Role Type</span>
          </label>
          <input type="text" name={`people[${index}].roleType`} value={person.roleType} onChange={(e) => handleNestedChange(e, 'people', index, 'roleType')} className="input input-bordered" />
        </div>
      ))}
    </div>
  );
};

export default Step5;