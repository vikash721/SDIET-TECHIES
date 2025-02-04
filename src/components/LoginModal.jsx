import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import useAuthStore from "../store/useAuthStore"; // Import Zustand store

const LoginModal = ({ isOpen, onClose }) => {
  const { login } = useAuthStore(); // Get login function from Zustand store
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Function to fetch user data from Google API
  const fetchUserData = async (credential) => {
    try {
      const response = await fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + credential);
      const data = await response.json();
      console.log(data);  // This will contain the user info like name, email, etc.
      // Here you can also update your state or call login()
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google Login Success:", response);
    const credential = response.credential;  // This is the token you're getting
    fetchUserData(credential);  // Fetch user data after login success
    login(); // Use Zustand to update auth state
    onClose(); // Close modal after login
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Error:", error);
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '400px',
          padding: '1.5rem',
        }}
        className={`bg-white rounded-xl shadow-lg transform transition-all duration-500 ease-out ${
          isOpen ? "scale-105" : "scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold sm:text-2xl">Login</h2>
          <button
            className="text-3xl cursor-pointer font-bold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Login
            </button>
          </div>

          {/* Google OAuth Button */}
          <div className="text-center mt-4">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} useOneTap />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
