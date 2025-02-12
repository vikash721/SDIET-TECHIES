import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const EventForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    date: '',
    time: '',
    eventBanner: '',
    participants: '',
    organizer: {
      name: '',
      profilePicture: ''
    },
    badge: '',
    logo: '',
    socialLinks: {
      instagram: '',
      linkedin: ''
    },
    aboutData: {
      title: '',
      sections: [{ title: '', content: '' }],
      callToAction: { title: '', content: '' }
    },
    guidelinesData: {
      generalRules: [''],
      technicalGuidelines: [''],
      judgingCriteria: [''],
      resources: { text: '', link: '', linkText: '' }
    },
    scheduleData: {
      eventDate: '',
      eventTime: '',
      location: '',
      timeline: [{ title: '', time: '' }]
    },
    announcements: [{ title: '', date: '', description: '', urgency: '' }],
    people: [{ id: '', name: '', role: '', email: '', phone: '', image: '', roleType: '' }],
    faqData: [{ question: '', answer: '' }]
  });

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePrevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNestedChange = (e, section, index, field) => {
    const updatedSection = formData[section].map((item, idx) =>
      idx === index ? { ...item, [field]: e.target.value } : item
    );
    setFormData({
      ...formData,
      [section]: updatedSection
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleNestedChange={handleNestedChange} />;
      case 3:
        return <Step3 formData={formData} handleNestedChange={handleNestedChange} />;
      case 4:
        return <Step4 formData={formData} handleNestedChange={handleNestedChange} />;
      case 5:
        return <Step5 formData={formData} handleNestedChange={handleNestedChange} />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {renderStep()}
      <div className="flex justify-between mt-8">
        {currentStep > 1 && <button onClick={handlePrevStep} className="btn btn-secondary">Previous</button>}
        {currentStep < 5 && <button onClick={handleNextStep} className="btn btn-primary">Next</button>}
      </div>
    </div>
  );
};

export default EventForm;