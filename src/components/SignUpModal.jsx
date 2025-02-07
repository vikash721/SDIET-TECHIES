import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

const SignUpModal = ({ isOpen, onClose, onLogin }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("Student");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleNextStep = () => {
    setStep(2);
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google Signup Success:", response);
    onLogin();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
                  <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.error("Google Signup Error")} useOneTap />
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal;
