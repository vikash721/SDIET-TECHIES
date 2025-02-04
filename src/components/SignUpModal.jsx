import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";

const SignUpModal = ({ isOpen, onClose, onLogin }) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("Student");

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNextStep = () => {
    setStep(2);
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google Signup Success:", response);
    onLogin(); // Trigger login state change
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Signup Error:", error);
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        style={{ width: "90%", maxWidth: "400px", padding: "1.5rem" }}
        className={`bg-white rounded-xl shadow-lg transform transition-all duration-500 ease-out ${
          isOpen ? "scale-105" : "scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold sm:text-2xl">
            {step === 1 ? "Sign Up" : "Personal Details"}
          </h2>
          <button className="text-3xl cursor-pointer font-bold" onClick={onClose}>
            &times;
          </button>
        </div>
        
        {step === 1 && (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Full Name</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your full name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input type="password" className="w-full p-2 border rounded-md" placeholder="Enter your password" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Confirm Password</label>
              <input type="password" className="w-full p-2 border rounded-md" placeholder="Confirm your password" />
            </div>
            <div className="mb-4">
              <button type="button" onClick={handleNextStep} className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer">
                Next
              </button>
            </div>
            <div className="text-center mt-4">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} useOneTap />
            </div>
          </form>
        )}
        
        {step === 2 && (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Role</label>
              <select className="w-full p-2 border rounded-md" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div className="mb-4">
              <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;
