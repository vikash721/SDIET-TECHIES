import React from 'react';

const Step3 = ({ formData, handleNestedChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: About the Event</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">About Title</span>
        </label>
        <input type="text" name="aboutData.title" value={formData.aboutData.title} onChange={(e) => handleNestedChange(e, 'aboutData', 0, 'title')} className="input input-bordered" />
      </div>
      {formData.aboutData.sections.map((section, index) => (
        <div key={index} className="form-control mb-4">
          <label className="label">
            <span className="label-text">Section Title</span>
          </label>
          <input type="text" name={`aboutData.sections[${index}].title`} value={section.title} onChange={(e) => handleNestedChange(e, 'aboutData.sections', index, 'title')} className="input input-bordered" />
          <label className="label">
            <span className="label-text">Section Content</span>
          </label>
          <textarea name={`aboutData.sections[${index}].content`} value={section.content} onChange={(e) => handleNestedChange(e, 'aboutData.sections', index, 'content')} className="textarea textarea-bordered" />
        </div>
      ))}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Call to Action Title</span>
        </label>
        <input type="text" name="aboutData.callToAction.title" value={formData.aboutData.callToAction.title} onChange={(e) => handleNestedChange(e, 'aboutData.callToAction', 0, 'title')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Call to Action Content</span>
        </label>
        <textarea name="aboutData.callToAction.content" value={formData.aboutData.callToAction.content} onChange={(e) => handleNestedChange(e, 'aboutData.callToAction', 0, 'content')} className="textarea textarea-bordered" />
      </div>
    </div>
  );
};

export default Step3;