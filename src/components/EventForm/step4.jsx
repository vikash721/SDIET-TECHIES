import React from 'react';

const Step4 = ({ formData, handleNestedChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Guidelines</h2>
      {formData.guidelinesData.generalRules.map((rule, index) => (
        <div key={index} className="form-control mb-4">
          <label className="label">
            <span className="label-text">General Rule</span>
          </label>
          <input type="text" name={`guidelinesData.generalRules[${index}]`} value={rule} onChange={(e) => handleNestedChange(e, 'guidelinesData.generalRules', index, '')} className="input input-bordered" />
        </div>
      ))}
      {formData.guidelinesData.technicalGuidelines.map((guideline, index) => (
        <div key={index} className="form-control mb-4">
          <label className="label">
            <span className="label-text">Technical Guideline</span>
          </label>
          <input type="text" name={`guidelinesData.technicalGuidelines[${index}]`} value={guideline} onChange={(e) => handleNestedChange(e, 'guidelinesData.technicalGuidelines', index, '')} className="input input-bordered" />
        </div>
      ))}
      {formData.guidelinesData.judgingCriteria.map((criteria, index) => (
        <div key={index} className="form-control mb-4">
          <label className="label">
            <span className="label-text">Judging Criteria</span>
          </label>
          <input type="text" name={`guidelinesData.judgingCriteria[${index}]`} value={criteria} onChange={(e) => handleNestedChange(e, 'guidelinesData.judgingCriteria', index, '')} className="input input-bordered" />
        </div>
      ))}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Resources Text</span>
        </label>
        <input type="text" name="guidelinesData.resources.text" value={formData.guidelinesData.resources.text} onChange={(e) => handleNestedChange(e, 'guidelinesData.resources', 0, 'text')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Resources Link</span>
        </label>
        <input type="text" name="guidelinesData.resources.link" value={formData.guidelinesData.resources.link} onChange={(e) => handleNestedChange(e, 'guidelinesData.resources', 0, 'link')} className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Resources Link Text</span>
        </label>
        <input type="text" name="guidelinesData.resources.linkText" value={formData.guidelinesData.resources.linkText} onChange={(e) => handleNestedChange(e, 'guidelinesData.resources', 0, 'linkText')} className="input input-bordered" />
      </div>
    </div>
  );
};

export default Step4;